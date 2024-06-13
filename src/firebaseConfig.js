import { initializeApp } from 'firebase/app';
import { getStorage, FirebaseStorage } from 'firebase/storage'; 

const firebaseConfig = {
    apiKey: "AIzaSyDZZJETSI4-_F2rBP_OiR5ph9FtaxnHxhI",
    authDomain: "rudranju-pra.firebaseapp.com",
    projectId: "rudranju-pra",
    storageBucket: "rudranju-pra.appspot.com",
    messagingSenderId: "45479027157",
    appId: "1:45479027157:web:3bfe11013ade5a878f1d5c"
  };
 

    const app = initializeApp(firebaseConfig);
     const storage = getStorage(app);


export { storage };
