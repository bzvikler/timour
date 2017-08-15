import {
    PLAYLIST_NAME_CHANGE,
    DJ_NAME_CHANGE,
    PLAYLIST_DATE_TO_LIVE_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    playListName: '',
    djName: '',
    playlistDateToLive: new Date()
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYLIST_NAME_CHANGE:
            return { ...state, playListName: action.payload };
        case DJ_NAME_CHANGE:
            return { ...state, djName: action.payload};
        case PLAYLIST_DATE_TO_LIVE_CHANGE:
            return { ...state, playlistDateToLive: action.payload};
        default:
            return state;
    }
};
