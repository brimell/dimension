import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import React, { useRef, useState, useEffect } from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './Login.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const auth = firebase.auth();

const Login = () => {

  const signInWithGoogle = () => { // doesn't work 
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

  const signUp = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(user => {
      console.log(user)
    }).catch(error => {
      console.log(error)
    }).then(function () {
      var userUid = auth.currentUser.uid;
      var db = firebase.firestore();

      db.collection('users').doc(userUid).set({
        email: emailRef.current.value,
        emailVertified: false,
        username: emailRef.current.value,
        online: false,
        password: passwordRef.current.value
    });
    })
  }
  
  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(user => {
      console.log(user)
    }).catch(error => {
      console.log(error)
    })
  }

  const CustomTextField = styled(TextField)({
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [logOrSign, setLogOrSign] = useState(false);

  useEffect(() => {
    // auth.onAuthStateChanged(user => {
    //   if (user) {
    //     console.log(user)
    //   }
    // })
    console.log(logOrSign)
  })

  return (
    <div className="Login-container">
      <img src={icon} className="App-logo" id='Login-App-logo' alt="icon" />
      <div className="topBar">
        <h1 className="App-title">Direction</h1>
      </div>
      {logOrSign === false && 
        <div className="content">
        <Button className="loginOptionBtn" variant="contained" onClick={() => setLogOrSign('signin')}>
          Sign In
        </Button>
        <Button className="loginOptionBtn" variant="contained" onClick={() => setLogOrSign('signup')}>
          Sign Up
        </Button>
      </div>
      }
      {logOrSign === 'signin' && 
      <div className="content">
      <header className="App-header">
        <h1 className="App-subtitle">Sign In</h1>
      </header>
      <CustomTextField inputRef={emailRef} className="input-div" id="email-input" label="Email..." />
      <CustomTextField inputRef={passwordRef} className="input-div" id="password-input" color='success' type="password" label="Password..." />
      <Button variant="contained" onClick={signIn} >Sign In</Button>
    </div>
    }
    {logOrSign === 'signup' &&
    <div className="content">
    <CustomTextField inputRef={emailRef} className="input-div" id="email-input" label="Email..." />
    <CustomTextField inputRef={nameRef} className="input-div" id="username-input" label="Username..." />
    <CustomTextField inputRef={passwordRef} className="input-div" id="password-input" color='success' type="password" label="Password..." />
    <Button variant="contained" onClick={signUp} >Sign Up</Button>
  </div>
  }
    </div>
  );
};


export default Login;
