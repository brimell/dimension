import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './Login.css';


const auth = firebase.auth();

const Login = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }
  


  return (
    <div className="Login-container">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="icon" />
        <h1 className="App-title">Sign In</h1>
      </header>
      <button onClick={signInWithGoogle} className="Sign in with Google"></button>
    </div>
  );
};


export default Login;
