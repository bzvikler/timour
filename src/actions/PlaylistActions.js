import PlaylistService from '../services/PlaylistService';
import { navToConfirm, navToPlaylist } from '../actions/NavActions';
import {
    PLAYLIST_NAME_CHANGE,
    DJ_NAME_CHANGE,
    PLAYLIST_DATE_TO_LIVE_CHANGE,
    CREATE_PLAYLIST,
    CONFIRM_PLAYLIST,
    PLAYLIST_EDIT_CODE_CAHANGE
} from './types.js';

export const playlistNameChange = text => {
    return {
        type: PLAYLIST_NAME_CHANGE,
        payload: text
    };
};

export const djNameChange = text => {
    return {
        type: DJ_NAME_CHANGE,
        payload: text
    };
};

export const playlistDateToLiveChange = date => {
    return {
        type: PLAYLIST_DATE_TO_LIVE_CHANGE,
        payload: date
    }
};

export const createPlaylist = ({ playlistName, djName, playlistDateToLive, user }) => {
    return (dispatch) => {
        const playlistId = Math.random().toString(36).substr(2, 5);
        PlaylistService.createPlaylist(
            playlistName,
            djName,
            playlistDateToLive,
            user,
            playlistId
        );
        dispatch({
            type: CREATE_PLAYLIST,
            payload: playlistId
        })
        dispatch(navToConfirm());
        // should the above call by async?!?!?! why does .then not work?
        // anyway, need to import navActions here and dispatch action of createPlaylistSuccess or something
        // need to pass in playListUrl so it can push /playlists/playlistUrl
        // need to dispatch a navAction to change some state like title and such
    };
}

export const playlistEditCodeChange = text => {
    return {
        type: PLAYLIST_EDIT_CODE_CAHANGE,
        payload: text
    }
}

export const confirmPlaylist = ({ playlistId, playlistEditCode}) => {
    return (dispatch) => {
        PlaylistService.postPlaylistEditCode(playlistId, playlistEditCode);
    };
}
