import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch();


    const loginToTop = (e) => {
        e.preventDefault();
    };

    const register = () => {
        if (!name)
            return alert("Please enter full name!");

        // here mostly are predefined function in firebase itself
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {

                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    }))
                })
            }).catch((err) => alert(err))
    };



    return (
        <div className='login'>

            <img src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png" alt="LinkedIn" />

            <form>
                <input
                    type="text"
                    placeholder='Full name (required if registering)'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    placeholder='Profile pic URL (optional)'
                    type="text"
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                />

                <input
                    placeholder='Email'
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    placeholder='Password' type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button onClick={loginToTop} type='submit'>Sign In</button>

            </form>

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
