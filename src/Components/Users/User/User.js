import React from 'react';
import user_class from './User.module.css';
import photo from '../../../Images/users.png'


class User extends React.Component{
    render(){
        return(
            <div className={user_class.container}>
                <div className={user_class.leftArea}>
                    <div>
                        <img src={this.props.photoUrl.small != null? this.props.photoUrl.small : photo}/>
                    </div>
                    <div className={user_class.itemBottom}>
                        {this.props.follow ?
                            <button onClick={() => {
                                this.props.unfollowUser(this.props.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.followUser(this.props.id)
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