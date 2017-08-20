import {
    PLAYLIST_NAME_CHANGE,
    DJ_NAME_CHANGE,
    PLAYLIST_DATE_TO_LIVE_CHANGE,
    CREATE_PLAYLIST,
    PLAYLIST_EDIT_CODE_CAHANGE
} from '../actions/types';

const INITIAL_STATE = {
    playListName: '',
    djName: '',
    playlistId: '',
    playlistDateToLive: new Date(),
    playlistEditCode: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYLIST_NAME_CHANGE:
            return { ...state, playListName: action.payload };
        case DJ_NAME_CHANGE:
            return { ...state, djName: action.payload};
        case PLAYLIST_DATE_TO_LIVE_CHANGE:
            return { ...state, playlistDateToLive: action.payload};
        case CREATE_PLAYLIST:
            return { ...state, playlistId: action.payload};
        case PLAYLIST_EDIT_CODE_CAHANGE:
            console.log(action.payload);
            return { ...state, playlistEditCode: action.payload};
        default:
            return state;
    }
};
