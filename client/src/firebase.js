import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig={
    apiKey: "AIzaSyDIigG7SJsW15lw7unnzQjjJj4nQQk-Jo4",
    authDomain: "footballapp-c2963.firebaseapp.com",
    projectId: "footballapp-c2963",
    storageBucket: "footballapp-c2963.appspot.com",
    messagingSenderId: "1050232980811",
    appId: "1:1050232980811:web:345cfe8552b46d4caa54ce",
    measurementId: "G-0BPKNCDL7E"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;
