import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEzLjUJA7dGI88qrZWzkXAGapcJumDS_U",
  authDomain: "raonthanksto-1e8ba.firebaseapp.com",
  databaseURL: "https://raonthanksto-1e8ba.firebaseio.com",
  projectId: "raonthanksto-1e8ba",
  storageBucket: "raonthanksto-1e8ba.appspot.com",
  messagingSenderId: "400340758703",
  appId: "1:400340758703:web:f76c376115f54228d7a45a",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();