import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagesReducer from "./MessagesReducer";


let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer});

let store = createStore(reducers);

export default store;