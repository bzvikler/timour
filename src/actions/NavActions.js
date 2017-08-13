import { push } from 'react-router-redux'
import {
    NAV_CREATE_ROOM,
    NAV_JOIN_ROOM
} from './types.js';

export const navCreateRoom = () => {
    return (dispatch) => {
        dispatch({
            type: NAV_CREATE_ROOM,
            payload: 'Create'
        })
        dispatch(push('/create'));
    }
};

export const navJoinRoom = () => {
    return {
        type: NAV_JOIN_ROOM,
        payload: '/join'
    };
}
