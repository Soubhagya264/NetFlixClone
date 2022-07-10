import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOcbeS5aSFFRwYYucuaVS_1VQSibDmJjg",
  authDomain: "netflix-clone-d1d94.firebaseapp.com",
  projectId: "netflix-clone-d1d94",
  storageBucket: "netflix-clone-d1d94.appspot.com",
  messagingSenderId: "7799422312",
  appId: "1:7799422312:web:c717ddf37a5f62e6e12add",
  measurementId: "G-1GXVT5YX6R"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
;