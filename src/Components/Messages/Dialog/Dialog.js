import React from 'react';
import dialog_class from './Dialog.module.css';

const Dialog = (props) => {
    let img = "https://lh3.googleusercontent.com/proxy/ClY_2H75jWuMv0iYJ3uMW5hMQTMXkXrOQuzdLoYpg6Vth74zjD_W71D0M0_iWz4A7pwqqusIis_knTQi0w6O5ubH3hrf4YK9YnrsYlu4knjUCXklqK4rZKQBIGHkhg"
    return (
        <div className={dialog_class.message}>
                <img src={img}/>
                <span className={dialog_class.item}>- {props.message}</span>
        </div>
    );
}

export default Dialog;