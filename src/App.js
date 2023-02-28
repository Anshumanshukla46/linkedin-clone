import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();


  useEffect(() => {
    // if page refreshed
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // login
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,

        }))

      } else {
        // logout
        dispatch(logout());

      }
    })

  }, [])

  return (

    <div className="App" >

      <Header />

      {/* rendering the login page */}
      {!user ? <Login /> : (

        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>

      )}

    </div>

  );
}

export default App;
