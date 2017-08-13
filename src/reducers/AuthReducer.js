import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    isLogginIn: false,
    isLoggedIn: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, isLoggedIn: true, };
        default:
            return state;
    }
};
