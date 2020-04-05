import React from 'react';
import Messages from "./Messages";
import {addMessage, newMessageChange} from "../../Data/MessagesReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return{
        newMessage: state.messagesPage.newMessage,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
}


export default compose(
    connect(mapStateToProps, {newMessageChange, addMessage}),
    withAuthRedirect
)(Messages)