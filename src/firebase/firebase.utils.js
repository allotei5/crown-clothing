import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBoELc_rC9lZuEuqbmsbDtixWceVnGKmck",
    authDomain: "crown-db-aec67.firebaseapp.com",
    projectId: "crown-db-aec67",
    storageBucket: "crown-db-aec67.appspot.com",
    messagingSenderId: "287121037857",
    appId: "1:287121037857:web:9694140bd98a1cf6f96160",
    measurementId: "G-GR9M2CL2TY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;