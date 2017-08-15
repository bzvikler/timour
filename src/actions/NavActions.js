import { push } from 'react-router-redux'
import {
    NAV_CREATE_ROOM,
    NAV_JOIN_ROOM,
    NAV_TO_PLAYLIST,
    NAV_TO_CONFIRM
} from './types.js';

export const navCreateRoom = () => {
    return (dispatch) => {
        dispatch({
            type: NAV_CREATE_ROOM,
            payload: 'Create'
        });
        dispatch(push('/create'));
    };
};

export const navJoinRoom = () => {
    return {
        type: NAV_JOIN_ROOM,
        payload: '/join'
    };
}

export const navToPlaylist = (playlistUrl) => {
    return (dispatch) => {
        dispatch({
            type: NAV_TO_PLAYLIST,
            payload: `Playlist`
        });
        dispatch(push(`/playlist/${playlistUrl}`))
    };
}

export const navToConfirm = () => {
    return (dispatch) => {
        dispatch({
            type: NAV_TO_CONFIRM,
            payload: 'Confirm'
        });
        dispatch(push('/create/confirm'));
    };
};
