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
import { db } from "./firebase"
import { collection, getDocs } from 'firebase/firestore/lite';


function Feed() {

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);

    // render component with database from firebase

    useEffect(() => {

        // onSnapshot give the real-time listener of database

        // here "posts" is the state
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snap => {

                setPosts(snap.docs.map(item => (
                    {
                        id: item.id,
                        data: item.data()
                    }
                )))
            })

    }, [])


    const sendPost = (e) => {
        e.preventDefault(); // not refresh

        db.collection('posts').add({
            name: "Anshuman Shukla",
            description: "This is test",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()// here time stamp of india,uk may be different but for server all will be same
        });

        setInput('');// after submitting in database input-box should be empty

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

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (

                <Post
                    key={id} // to re-render only unmatched key
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />

            ))}

        </div>
    )
}

export default Feed
