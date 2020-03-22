import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";



const Messages = (props) => {

    let dialogsArray = props.dialogsData.map(data => <DialogItem name={data.name} id={data.id} image={data.image}/>);
    let messagesArray = props.messagesData.map(data => <Dialog message={data.message} id={data.id}/>);


    let newMessageChanges = (e) => {
        props.messageChange(e.target.value);
    }

    let addNewMessage = () =>{
        props.addMessage();
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
                    <textarea value={props.newMessage} onChange={newMessageChanges}></textarea>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;