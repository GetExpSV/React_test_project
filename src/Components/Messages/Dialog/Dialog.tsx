import React from 'react';
import dialog_class from './Dialog.module.css';
import {Route} from "react-router-dom";

type Props = {
    message: string
    id: number
}

const Dialog: React.FC<Props> = (props) => {
    let messageItem;
    let img = "https://icons.iconarchive.com/icons/iynque/ios7-style/1024/Messages-icon.png";
    if (props.id === 1) {
        messageItem = () => <div className={dialog_class.messageLeft}>
            <img src={img} alt={""}/><span> - {props.message}</span>
        </div>
    }

    if (props.id === 2) {
        messageItem = () => <div className={dialog_class.messageRight}>
            <span>{props.message} - </span> <img src={img} alt={""}/>
        </div>
    }

    return (
        <div>
            <Route render={messageItem}/>
        </div>
    );
};

export default Dialog;