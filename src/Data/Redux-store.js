import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagesReducer from "./MessagesReducer";
import UsersReducer from "./UsersReducer";
import {AuthReducer} from "./Auth";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;