import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagesReducer from "./MessagesReducer";
import UsersReducer from "./UsersReducer";
import {AuthReducer} from "./Auth";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;