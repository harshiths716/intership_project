import firebase from 'firebase/app';
import 'firebase/storage';

// import firebase from 'react-native-firebase'
// Initialize Firebase
// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: "dailydrip-firebase-storage.firebaseapp.com",
//   databaseURL: "https://dailydrip-firebase-storage.firebaseio.com",
//   storageBucket: "gs://eventsmobile-9480f.appspot.com"
// }


const firebaseConfig = {
  apiKey: "AIzaSyAqkaeppsLUKHuljcfCrEiHUDLDjvx1DAU",
  authDomain: "eventsmobile-9480f.firebaseapp.com",
  databaseURL: "https://eventsmobile-9480f.firebaseio.com",
  projectId: "eventsmobile-9480f",
  storageBucket: "eventsmobile-9480f.appspot.com",
  messagingSenderId: "929636501127",
  appId: "1:929636501127:web:f1acc59e1a29021c4dda22"
 };


 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();
export {
  storage, firebase as default
  }