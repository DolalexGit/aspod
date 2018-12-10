import { firebase } from '@firebase/app';
// import * as firebase from 'firebase/app';
import { FirebaseApp } from '@firebase/app-types';
import '@firebase/auth';
import '@firebase/firestore';
import 'firebase/database';
//import { FirebaseFirestore } from '@firebase/firestore-types';
// import { FirebaseDatabase } from 'firebase/database-types';

import { ICow } from './cows';

const fireConfig = {
  apiKey: "AIzaSyANzmeJQTBzOw5ZcHEQISqiwMITLzip1p0",
  authDomain: "aspod-51bca.firebaseapp.com",
  databaseURL: "https://aspod-51bca.firebaseio.com",
  projectId: "aspod-51bca",
  storageBucket: "aspod-51bca.appspot.com",
  messagingSenderId: "735761766761"
};

class Fire {
  fbApp: FirebaseApp;
  fbAuth;
//  fbStorage: FirebaseFirestore;
  fbDB: any; //FirebaseDatabase;
  constructor() {
    this.fbApp =  firebase.initializeApp(fireConfig);
    this.fbDB = this.fbApp.database();
    
    
  }

  getAllCows(): Promise<ICow[]> {
    const ref =this.fbDB.ref('cows');
    return ref.once('value')
    .then(snapshot => {
      const cows = snapshot.val(); 
      return cows;
    });
  }

  setCow(ind: number, cow: ICow) {
    const path = `cows/cow${ind}`;
    this.fbDB.ref(path).set(cow);
  }
}

const FB = new Fire();
export default FB;
