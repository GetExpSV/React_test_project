import React from 'react';
import dialog_class from './Dialog.module.css';

const Dialog = (props) => {
    let img = "https://lh3.googleusercontent.com/proxy/anQ95ozAhQeKCe26HtmpNJt_o3zGIRn-6dB2bZ1qgN7d-_B6M0A77a_bfm4PukEPjcxcyapSfz71ZwbnGKq4LWspxGhxP1Pc_BSTjaocqyt7j8Vdjdel_7K3so6l5A"
    return (
        <div className={dialog_class.message}>
            <img
                src={img}/>
            - {props.messages}
        </div>
    );
}

export default Dialog;