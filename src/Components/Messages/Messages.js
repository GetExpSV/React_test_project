import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";

const Messages = () => {
    return (
        <div>
            <h4>Dialogs</h4>
            <div className={messages_class.content}>
                <div className={messages_class.person}>
                    <DialogItem name="Vasya" id="1"/>
                    <DialogItem name="Masha" id="2"/>
                    <DialogItem name="Vova" id="3"/>
                    <DialogItem name="Alex" id="4"/>
                    <DialogItem name="Ivan" id="5"/>
                    <DialogItem name="Anna" id="6"/>
                    <DialogItem name="Mikhail" id="7"/>
                    <DialogItem name="Ivanov" id="8"/>
                </div>
                <div className={messages_class.cap}></div>
                <div className={messages_class.dialog}>
                    <Dialog messages="Hi"/>
                </div>
            </div>
        </div>
    );
}

export default Messages;