import AuthService from '../services/AuthService';
import { navCreateRoom, navJoinRoom } from '../actions/NavActions';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';

export const loginUser = () => {
    return (dispatch) => {
        // use the service here to firebase login anon
        AuthService.loginUserAnon()
            .then(user => {
                console.log(user);
                loginUserSuccess(dispatch, user);
            })
            .catch(error => {
                loginUserFail(dispatch, error);
            });
    };
};

// Private
const loginUserSuccess = (dispatch, user) => {
    // get the anon user and add it to a db
    console.log('logged in', user);
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    dispatch(navCreateRoom());
};

// Private
const loginUserFail = (error) => {

};
