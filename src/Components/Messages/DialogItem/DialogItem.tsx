import React from 'react';
import dialogItem_class from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type Props = {
    id: number
    image: string
    name: string
}

const DialogItem: React.FC<Props> = (props) => {
    return (
        <div className={dialogItem_class.item}><NavLink to={"/messages/" + props.id}
                                                        activeClassName={dialogItem_class.active}> <img
            className={dialogItem_class.image} src={props.image} alt={""}/>
            {props.name} </NavLink></div>
    );
};

export default DialogItem;