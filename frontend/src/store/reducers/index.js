import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import UserReducer from './UserReducer';
import ContentReducer from './ContentReducer';
import ContactSupportReducer from './ContactSupportReducer';
import ForumReducer from './ForumReducer';
import EventReducer from './EventReducer';
import DashboardReducer from './DashboardReducer';

const RootReducer = combineReducers({
    AppReducer,
    UserReducer,
    ContentReducer,
    ContactSupportReducer,
    ForumReducer,
    EventReducer,
    DashboardReducer,
});

export default RootReducer;