import {getApp,getApps,initializeApp} from 'firebase/app'
import {getStorage} from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdioADDHUoMwtOHXvFxMFcufSSsxdjCFc",
    authDomain: "connect-top.firebaseapp.com",
    projectId: "connect-top",
    storageBucket: "connect-top.appspot.com",
    messagingSenderId: "559484763416",
    appId: "1:559484763416:web:b0868cebc54b53bce9b26d",
    measurementId: "G-ENL8EJ31GK"
};

  const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig)
  const storage = getStorage(app)

  export {app,storage}
  