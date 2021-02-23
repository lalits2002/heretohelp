import firebase from 'firebase';
import { firebaseConfig } from '../component/authentication/credencials';

var fb;
if (!firebase.apps.length) 
  fb = firebase.initializeApp(firebaseConfig);
else 
  fb = firebase.app();

export default fb;
