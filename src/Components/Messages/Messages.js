import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";
import MessageReduxForm from "./messageForm";

const Messages = (props) => {

    let dialogsArray = props.dialogsData.map(data => <DialogItem name={data.name} id={data.id} image={data.image}
                                                                 key={data.id}/>);
    let messagesArray = props.messagesData.map(data => <Dialog message={data.message} id={data.id} key={data.id}/>);


    let newMessageChanges = (e) => {
        props.newMessageChange(e.message);
    }

    let addNewMessage = (formData) => {
        props.addMessage();
    }

    props.initialize('message', {message: props.newMessage})
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
                    <MessageReduxForm onSubmit={addNewMessage} onChange={newMessageChanges}/>
                </div>
            </div>
        </div>
    );
}

export default Messages;