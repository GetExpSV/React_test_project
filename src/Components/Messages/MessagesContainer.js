import React from 'react';
import Messages from "./Messages";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Data/MessagesReducer";

let MessagesContainer = (props) => {

    let messageChange = (text) => {
        props.store.dispatch(newMessageChangeActionCreator(text));
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let newMessage = props.store.getState().messagesPage.newMessage;
    let dialogsData = props.store.getState().messagesPage.dialogsData;
    let messagesData = props.store.getState().messagesPage.messagesData;

    return(<Messages messageChange={messageChange} addMessage={addMessage} newMessage={newMessage}
                     dialogsData={dialogsData} messagesData={messagesData}/>);
}

export default MessagesContainer;