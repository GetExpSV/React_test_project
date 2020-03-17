import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {

    let dialogsArray = props.data.dialogsData.map(data => <DialogItem name={data.name} id={data.id} image={data.image}/>);
    let messagesArray = props.data.messagesData.map(data => <Dialog message={data.message} id={data.id}/>);

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
            </div>
        </div>
    );
}

export default Messages;