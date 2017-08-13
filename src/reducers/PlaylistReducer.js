import {
    PLAYLIST_NAME_CHANGE,
    DJ_NAME_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    playListName: '',
    djName: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYLIST_NAME_CHANGE:
            return { ...state, playListName: action.payload };
        case DJ_NAME_CHANGE:
            return { ...state, djName: action.payload};
        default:
            return state;
    }
};
