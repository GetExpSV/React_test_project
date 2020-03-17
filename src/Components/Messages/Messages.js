import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";

const Messages = () => {

    let personData =
        [{id: 1, name: 'Vasya'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Vova'},
            {id: 4, name: 'Alex'},
            {id: 5, name: "Ivan"},
            {id: 6, name: 'Anna'},
            {id: 7, name: 'Mikhail'},
            {id: 8, name: 'Ivanov'}];

    let messagesData =
        [{id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'}];

    let dialogsArray = personData.map(data => <DialogItem name={data.name} id={data.id}/>);
    let messagesArray = messagesData.map(data => <Dialog message={data.message}/>);

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