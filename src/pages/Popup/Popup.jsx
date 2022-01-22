import React, { useEffect, useState } from 'react';
import './Popup.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Loading from '../../components/loading/loading.js';
import Login from '../../components/Login/login.js';
import Game from '../../components/Game/game.js';



const auth = firebase.auth();
const firestore = firebase.firestore();


const Popup = () => {
  const [user] = useAuthState(auth);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(()=>{
    setTimeout(() => { setLoadingStatus(false)}, 1000);
  }, [])
  
  return (
    <div className="App">
      {user ? <Game /> : (loadingStatus ? <Loading /> : <Login />)}
    </div>
  );
};

export default Popup;
