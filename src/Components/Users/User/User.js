import React from 'react';
import user_class from './User.module.css';
import photo from '../../../Images/users.png'
import {NavLink} from "react-router-dom";


class User extends React.Component {
    render() {
        return (
            <div className={user_class.container}>
                <div className={user_class.leftArea}>
                    <div>
                        <NavLink to={`/profile/${this.props.id}`}>
                            <img src={this.props.photoUrl.small != null ? this.props.photoUrl.small : photo}/>
                        </NavLink>
                    </div>
                    <div className={user_class.itemBottom}>
                        {this.props.followed ?
                            <button disabled={this.props.followingProgress.some(id => id === this.props.id)}
                                    onClick={() => {
                                        this.props.unfollow(this.props.id)
                                    }}>Unfollow</button> :
                            <button disabled={this.props.followingProgress.some(id => id === this.props.id)}
                                    onClick={() => {
                                        this.props.follow(this.props.id);
                                    }}>Follow</button>}
                    </div>
                </div>
                <div className={user_class.centerArea}>
                    <div>
                        {this.props.fullName}
                    </div>
                    <div className={user_class.itemBottom}>
                        {this.props.status}
                    </div>
                </div>
                <div className={user_class.rigthArea}>
                    <div>
                        {this.props.country}
                    </div>
                    <div className={user_class.itemBottom}>
                        {this.props.city}
                    </div>
                </div>
            </div>
        );
    }
}

export default User;