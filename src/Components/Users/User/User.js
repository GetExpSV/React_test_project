import React from 'react';
import user_class from './User.module.css';

let User = (props) => {
    return (
        <div className={user_class.container}>
            <div className={user_class.leftArea}>
                <div>
                    <img src={props.photoUrl}/>
                </div>
                <div className={user_class.itemBottom}>
                    {props.follow ?
                        <button onClick={ () => {props.unfollowUser(props.id)}}>Unfollow</button> :
                        <button onClick={() => {props.followUser(props.id)}}>Follow</button>}
                </div>
            </div>
            <div className={user_class.centerArea}>
                <div>
                    {props.fullName}
                </div>
                <div className={user_class.itemBottom}>
                    {props.status}
                </div>
            </div>
            <div className={user_class.rigthArea}>
                <div>
                    {props.country}
                </div>
                <div className={user_class.itemBottom}>
                    {props.city}
                </div>
            </div>
        </div>
    );
}

export default User;