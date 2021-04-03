import firebase from "firebase/app";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBjdliAeUpiJCF5nKRPXM1sz7Lt-iBTOx0",
  authDomain: "test-vue-4f80c.firebaseapp.com",
  projectId: "test-vue-4f80c",
  storageBucket: "test-vue-4f80c.appspot.com",
  messagingSenderId: "118764532262",
  appId: "1:118764532262:web:f1c091d5495cdc8f89ace7",
  measurementId: "G-J2JGEJ663E",
};
const fb = firebase.initializeApp(firebaseConfig);
export { fb };
