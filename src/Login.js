import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import "./Login.css"

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch();


    const loginToTop = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                const user = userAuth.user;


                dispatch(login({
                    email: user.email,
                    uid: user.uid,
                    displayName: user.displayName,
                    profileUrl: user.photoURL
                }));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const register = () => {
        if (!name) {
            return alert("Please enter full name!");
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                const user = userAuth.user;
                console.log("createUserWithEmailAndPassword", user);

                user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: user.email,
                            uid: user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    console.log("login.js", (name || "null"));

    return (
        <div className='login'>

            <img id='image' src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="LinkedIn" />

            <form>
                <input
                    type="text"
                    placeholder='Full name (required if registering)'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder='Profile pic URL (optional)'
                    type="text"
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                />

                <input
                    placeholder='Email (required)'
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <input
                    placeholder='Password' type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button onClick={loginToTop} type='submit'>Sign In</button>

            </form>

            <h2 className='login_message'>New users must
                <span className='login_name'> REGISTER <span className='arrow'><ArrowDownwardIcon /></span></span> first.
            </h2>

            <p>Not a member ? {" "}
                <span
                    className='login_register' onClick={register}>
                    Register Now
                </span>
            </p>

        </div>
    )
}

export default Login
