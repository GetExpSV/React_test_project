import React from 'react';
import Messages from "./Messages";
import {addMessage, newMessageChange} from "../../Data/MessagesReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        newMessage: state.messagesPage.newMessage,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
}

let MessagesContainer = connect(mapStateToProps, {newMessageChange, addMessage})(Messages);

export default MessagesContainer;