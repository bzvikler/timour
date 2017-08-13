import firebase from 'firebase';
import { firebaseConfig } from '../utility/config';


const AuthService = {
    initApp: () => {
        firebase.initializeApp(firebaseConfig);
    },

    loginUserAnon: () => {
        return firebase.auth().signInAnonymously();
    }
}

export default AuthService;
