//create a config object
import { initializeApp } from "firebase/app";

//auth
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkAAcerozm8k1_qdsGG8MIiNxhHNgkMv0",
  authDomain: "react-course-1fab2.firebaseapp.com",
  projectId: "react-course-1fab2",
  storageBucket: "react-course-1fab2.appspot.com",
  messagingSenderId: "43788733743",
  appId: "1:43788733743:web:e88c5f370d0721907365da",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

//to use google auth
//class og google_auth
const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signinwithgooglepopup = () =>
  signInWithPopup(auth, googleprovider);
export const signinwithgoogleredirect = () =>
  signInWithRedirect(auth, googleprovider);

// database in firestore

export const db = getFirestore();

//creating user in database
export const createuser = async (userAuth, addinfo = {}) => {
  console.log(userAuth);

  // getting the databse and collection and identifier
  const userdoc = doc(db, "user", userAuth.uid);
  console.log(userdoc);

  //like api to access the firestore
  const usersnap = await getDoc(userdoc);
  console.log(usersnap);
  console.log(usersnap.exists());

  //creation of user in firestore
  if (!usersnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userdoc, {
        displayName,
        email,
        createdAt,
        ...addinfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //will return to userdoc in sign in jsx
  return userdoc;
};

export const createauthwithemailandpass = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
