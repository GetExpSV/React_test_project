import React from 'react';
import messages_class from './Messages.module.css';
import Dialog from './Dialog/Dialog'
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {

    let dialogsArray = props.data.dialogsData.map(data => <DialogItem name={data.name} id={data.id} image={data.image}/>);
    let messagesArray = props.data.messagesData.map(data => <Dialog message={data.message} id={data.id}/>);

    let newMessage = React.createRef();

    let newMessageAlert = () =>{
        let text = newMessage.current.value;
        let messageId;
        if(props.data.messagesData[props.data.messagesData.length-1].id === 2){
            messageId = 1;
        }
        if(props.data.messagesData[props.data.messagesData.length-1].id ===1){
            messageId = 2;
        }
        let message = {id: messageId, message: text};
        props.addMessage(message);
        newMessage.current.value = '';
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
                    <textarea ref={newMessage}></textarea>
                    <button onClick={newMessageAlert}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;