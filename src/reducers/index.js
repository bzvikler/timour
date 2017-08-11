import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SessionReducer from './SessionReducer';
import RoutingReducer from './RoutingReducer';

export default combineReducers({
    auth: AuthReducer,
    session: SessionReducer,
    routing: RoutingReducer
});
