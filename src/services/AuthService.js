import firebase from 'firebase';
import { firebaseConfig } from '../utility/config';


const AuthService = {
    initApp: () => {
        firebase.initializeApp(firebaseConfig);
    },

    loginUserAnon: () => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInAnonymously()
                .then(user => {
                    resolve(user.uid);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

export default AuthService;
