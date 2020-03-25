import React from 'react';
import Messages from "./Messages";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Data/MessagesReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        newMessage: state.messagesPage.newMessage,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        messageChange: (text) => {
            dispatch(newMessageChangeActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;