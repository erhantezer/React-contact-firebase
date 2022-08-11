import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAI7mSuB4taj8KkHq1JcdRAEe3MRlF607Y",
  authDomain: "contacts-d262e.firebaseapp.com",
  databaseURL: "https://contacts-d262e-default-rtdb.firebaseio.com",
  projectId: "contacts-d262e",
  storageBucket: "contacts-d262e.appspot.com",
  messagingSenderId: "1059724071249",
  appId: "1:1059724071249:web:3679375d69ee1691eb0370",
  measurementId: "G-90NGNZDJZE"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   databaseURL: process.env.REACT_APP_databaseURL,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// }


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)