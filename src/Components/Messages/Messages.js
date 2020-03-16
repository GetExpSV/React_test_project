import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'

const Messages = () => {
    return (
        <div className={messages_class.content}>
            <div className={messages_class.person}>
                <div className={messages_class.item}>Vasya</div>
                <div className={messages_class.item}>Petya</div>
                <div className={messages_class.item}>Ivan</div>
                <div className={messages_class.item}>Masha</div>
                <div className={messages_class.item}>Dima</div>
                <div className={messages_class.item}>Vova</div>
                <div className={messages_class.item}>Piter</div>
                <div className={messages_class.item}>Anna</div>
            </div>
            <div className={messages_class.dialog}>
                <Dialog messages="Hi"/>
            </div>
        </div>
    );
}

export default Messages;