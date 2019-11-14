import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIFb1uD-mUiWYFQVkdYlVh_SLMrtQ2QMk",
  authDomain: "web-notification-a4fd2.firebaseapp.com",
  databaseURL: "https://web-notification-a4fd2.firebaseio.com",
  projectId: "web-notification-a4fd2",
  storageBucket: "web-notification-a4fd2.appspot.com",
  messagingSenderId: "448387985217",
  appId: "1:448387985217:web:e3cbe7e0e9b606c1803bc0",
  measurementId: "G-LC0BK7N1PE"
 };


// const firebaseConfig = {
//   apiKey: "AIzaSyAqkaeppsLUKHuljcfCrEiHUDLDjvx1DAU",
//   authDomain: "eventsmobile-9480f.firebaseapp.com",
//   databaseURL: "https://eventsmobile-9480f.firebaseio.com",
//   projectId: "eventsmobile-9480f",
//   storageBucket: "eventsmobile-9480f.appspot.com",
//   messagingSenderId: "929636501127",
//   appId: "1:929636501127:web:f1acc59e1a29021c4dda22"
//  };


 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();
export {
  storage, firebase as default
  }