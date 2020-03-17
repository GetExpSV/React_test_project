import React from 'react';
import avatar_class from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={avatar_class.avatar}>
            <img
                src={props.avatarImg}/>
        </div>
    );
}

export default Avatar;