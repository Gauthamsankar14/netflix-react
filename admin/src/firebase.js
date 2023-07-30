import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBmyNayiVR1tGgwkDiiiTzhFNElzd8m_y4",
  authDomain: "netflix-ff9f8.firebaseapp.com",
  projectId: "netflix-ff9f8",
  storageBucket: "netflix-ff9f8.appspot.com",
  messagingSenderId: "568612341546",
  appId: "1:568612341546:web:972d7096412eb4c071c053",
  measurementId: "G-ZYK97V57TT"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;