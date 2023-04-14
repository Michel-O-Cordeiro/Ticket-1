import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAowZ9LAQXS_Yn2u5pLd0GsrfMvd0arAkQ",
    authDomain: "ticket-d824c.firebaseapp.com",
    projectId: "ticket-d824c",
    storageBucket: "ticket-d824c.appspot.com",
    messagingSenderId: "506881158807",
    appId: "1:506881158807:web:151fe25e15ec82768643d2",
    measurementId: "G-MR9SPHJXY9"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };