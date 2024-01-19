import { getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAhI_7-GLsBs5EvrlmYmBxfKsC9LA5H9Ac",
    authDomain: "food-delivery-app-96b2b.firebaseapp.com",
    databaseURL: "https://food-delivery-app-96b2b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "food-delivery-app-96b2b",
    storageBucket: "food-delivery-app-96b2b.appspot.com",
    messagingSenderId: "855363526663",
    appId: "1:855363526663:web:e1e7861a2e793f774dcaa2"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };