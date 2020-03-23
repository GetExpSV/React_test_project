import React from 'react';
import Messages from "./Messages";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Data/MessagesReducer";
import {connect} from "react-redux";

/*let MessagesContainer = (props) => {

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
}*/

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