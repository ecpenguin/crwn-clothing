import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config ={
    apiKey: "AIzaSyDPgDKWfLS1DuZOSEVUbThN1T-dsS7gFb8",
    authDomain: "crwn-db-6ab89.firebaseapp.com",
    projectId: "crwn-db-6ab89",
    storageBucket: "crwn-db-6ab89.appspot.com",
    messagingSenderId: "760057554734",
    appId: "1:760057554734:web:5283f01217efb16269bcbf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;