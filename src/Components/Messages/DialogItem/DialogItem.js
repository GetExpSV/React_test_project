import React from 'react';
import dialogItem_class from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={dialogItem_class.item}><NavLink to={"/messages/" + props.id}
                                                        activeClassName={dialogItem_class.active}> -
            {props.name} </NavLink></div>
    );
}

export default DialogItem;