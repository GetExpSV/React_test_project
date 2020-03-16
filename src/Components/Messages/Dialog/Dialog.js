import React from 'react';
import dialog_class from './Dialog.module.css';

const Dialog = (value) => {
    return (
        <div>{value.messages}</div>
    );
}

export default Dialog;