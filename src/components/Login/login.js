import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import React, { useRef } from 'react';
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

  return (
    <div className="Login-container">
      <img src={icon} className="App-logo" alt="icon" />
      <div className="topBar">
        <h1 className="App-title">Direction</h1>
      </div>
      <header className="App-header">
        <h1 className="App-subtitle">Sign In</h1>
      </header>
      <CustomTextField inputRef={emailRef} className="input-div" id="email-input" label="Email..." />
      <CustomTextField inputRef={passwordRef} className="input-div" id="password-input" color='success' type="password" label="Password..." />
      <div className="button-container">
        <Button variant="contained" onClick={signIn} >Sign In</Button>
        <Button variant="contained" onClick={signUp} >Sign Up</Button>
      </div>
      
    </div>
  );
};


export default Login;
