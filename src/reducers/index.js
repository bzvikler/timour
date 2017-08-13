import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlaylistReducer from './PlaylistReducer';
import RoutingReducer from './RoutingReducer';

export default combineReducers({
    auth: AuthReducer,
    playlist: PlaylistReducer,
    routing: RoutingReducer
});
