import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAspTJ5zdWOSl3MXXioa3ShgfU8SMmJ1is",
    authDomain: "crown-db-a002e.firebaseapp.com",
    databaseURL: "https://crown-db-a002e.firebaseio.com",
    projectId: "crown-db-a002e",
    storageBucket: "crown-db-a002e.appspot.com",
    messagingSenderId: "427092309111",
    appId: "1:427092309111:web:965c56a5b90698dd624272",
    measurementId: "G-0NLHQY5K4B"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;