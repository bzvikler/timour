import {
    NAV_CREATE_ROOM,
    NAV_JOIN_ROOM
} from '../actions/types';

const INITIAL_STATE = {
    navTitle: 'Qllaborate'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAV_CREATE_ROOM:
            return { ...state, navTitle: action.payload };
        default:
            return state;
    }
};
