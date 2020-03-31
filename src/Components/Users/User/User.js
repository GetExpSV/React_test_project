import React from 'react';
import user_class from './User.module.css';
import photo from '../../../Images/users.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


class User extends React.Component{
    render(){
        return(
            <div className={user_class.container}>
                <div className={user_class.leftArea}>
                    <div>
                        <NavLink to={`/profile/${this.props.id}`}>
                        <img src={this.props.photoUrl.small != null? this.props.photoUrl.small : photo}/>
                        </NavLink>
                    </div>
                    <div className={user_class.itemBottom}>
                        {this.props.followed ?<button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`,
                                {withCredentials:true, headers: {'API-KEY': `3dd39951-4548-4dbf-a3e5-5f07ea7a0d32`}})
                                .then(response => {
                                    if(response.data.resultCode === 0){
                                        this.props.unfollow(this.props.id)
                                    }
                                })
                        }}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`, {},
                                    {withCredentials:true, headers: {'API-KEY': `3dd39951-4548-4dbf-a3e5-5f07ea7a0d32`}})
                            .then(response=>{
                                        if(response.data.resultCode === 0){
                                            this.props.follow(this.props.id)
                                        }
                                    })
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