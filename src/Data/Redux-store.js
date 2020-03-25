import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messagesReducer from "./MessagesReducer";
import UsersReducer from "./UsersReducer";


let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer
});

let store = createStore(reducers);

export default store;