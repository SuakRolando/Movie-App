import FIREBASE from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  //Isi sesuai file configurasi anda
  apiKey: "AIzaSyBVM8XDNQJlJLU2CbFzqIjzChXBJyCRZo0",
  authDomain: "movie-app-8d864.firebaseapp.com",
  projectId: "movie-app-8d864",
  storageBucket: "movie-app-8d864.appspot.com",
  messagingSenderId: "699771527364",
  appId: "1:699771527364:web:7d845784043ce7a80ca991"
};
// Initialize Firebase
const app = FIREBASE.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app;
