import PlaylistService from '../services/PlaylistService';
import {
    PLAYLIST_NAME_CHANGE,
    DJ_NAME_CHANGE,
    CREATE_PLAYLIST
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
export const createPlaylist = ({ playlistName, djName, user }) => {
    return (dispatch) => {
        const playlistUrl = Math.random().toString(36).substr(2, 5);
        PlaylistService.createPlaylist(playlistUrl, user, playlistName, djName)
        // should the above call by async?!?!?! why does .then not work?
        // anyway, need to import navActions here and dispatch action of createPlaylistSuccess or something
        // need to pass in playListUrl so it can push /playlists/playlistUrl
        // need to dispatch a navAction to change some state like title and such
    };
}
