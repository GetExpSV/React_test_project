import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Data/MessagesReducer";



const Messages = (props) => {

    let dialogsArray = props.state.dialogsData.map(data => <DialogItem name={data.name} id={data.id} image={data.image}/>);
    let messagesArray = props.state.messagesData.map(data => <Dialog message={data.message} id={data.id}/>);


    let newMessageArea = (e) => {
        props.dispatch(newMessageChangeActionCreator(e.target.value));
    }

    let addNewMessage = () =>{
        props.dispatch(addMessageActionCreator())
    }
    return (
        <div>
            <h4>Dialogs</h4>
            <div className={messages_class.content}>
                <div className={messages_class.person}>
                    {dialogsArray}
                </div>
                <div className={messages_class.dialog}>
                    {messagesArray}
                </div>
                <div className={messages_class.textItem}>
                    <textarea value={props.state.newMessage} onChange={newMessageArea}></textarea>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;