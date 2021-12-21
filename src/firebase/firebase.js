
import { initializeApp } from "firebase/app";

import { getFirestore , collection, addDoc} from "firebase/firestore";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyA4XwParBAgBpnki9v_FetT_NX5HM81w_I",

    authDomain: "motion-verbs-research.firebaseapp.com",

    projectId: "motion-verbs-research",

    storageBucket: "motion-verbs-research.appspot.com",

    messagingSenderId: "958044924392",

    appId: "1:958044924392:web:3f6a4252158f1924a3dc5d",

    measurementId: "G-ZGQ4E8Y1CP"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
