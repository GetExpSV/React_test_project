import React from 'react';
import avatar_class from './Avatar.module.css';

const Avatar = (props) => {
    let avatarImg = "http://getdrawings.com/img/silhouette-avatar-12.png";
    return (
        <div className={avatar_class.avatar}>
            { !props.avatarImg ? <img src={avatarImg}/> : <img
                src={props.avatarImg}/>}
        </div>
    );
}

export default Avatar;