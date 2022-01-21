import React from 'react';
import './Popup.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Loading from '../../components/loading/loading.js';
import Login from '../../components/Login/login.js';




const auth = firebase.auth();
const firestore = firebase.firestore();


const Popup = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Loading /> : <Login />}
    </div>
  );
};

export default Popup;
