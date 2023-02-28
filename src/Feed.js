import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption"
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post";


// important to know the latest dependecy from google/youtube
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // import new firestore methods

import { db } from "./firebase"

import { query, orderBy, onSnapshot } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {

    const user = useSelector(selectUser);
    // console.log("I AM USER", user);

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);
    // render component with database from firebase
    console.log(posts);

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {

            const postsArray = [];

            querySnapshot.forEach((doc) => {
                postsArray.push({
                    id: doc.id,
                    data: doc.data(),
                });


            });

            setPosts(postsArray);

        });
        return () => {
            unsubscribe();
        };

    }, []);


    const sendPost = async (e) => {
        e.preventDefault(); // will not refresh

        try {

            await addDoc(collection(db, "posts"), {
                name: user.displayName || "null",
                description: user.email || "null",
                message: input,
                photoUrl: user.photoUrl || "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            setInput('');// after submitting in database input-box should be empty

        } catch (err) {
            console.log("Error in feed.js", err);
        }
    }

    return (
        <div className='feed'>

            <div className="feed_inputContainer">
                <div className="feed_input">

                    <CreateIcon />

                    <form>

                        <input
                            value={input}

                            // this is important

                            onChange={event => setInput(event.target.value)}

                            type="text" />

                        <button type='submit'
                            onClick={sendPost}
                        >
                            Send
                        </button>
                    </form>

                </div>



                <div className="feed_inputOptions">

                    <InputOption title="Photo"
                        Icon={ImageIcon}
                        color="#70B5F9"
                    />

                    <InputOption title="Video"
                        Icon={SubscriptionsIcon}
                        color="#E7A33E"
                    />

                    <InputOption title="Event"
                        Icon={EventNoteIcon}
                        color="#C0CBCD"
                    />

                    <InputOption
                        title="Write article"
                        Icon={CalendarViewDayIcon}
                        color="#7FC15E"
                    />
                </div>
            </div>

            {/* Posts */}

            <FlipMove>

                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (

                    <Post
                        key={id} // to re-render only unmatched key
                        // name={name}
                        name={description}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}

            </FlipMove>

        </div>
    )
}

export default Feed
