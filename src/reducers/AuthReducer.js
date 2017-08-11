import {
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'foo':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};
