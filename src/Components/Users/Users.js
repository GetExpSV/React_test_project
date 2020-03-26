import React from 'react';
import UserContainer from "./User/UserContainer";
import users_class from './Users.module.css'
import * as axios from 'axios';



class Users extends React.Component{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>
        {
            this.props.setUsers(response.data.items);
        });
    }

    render(){

        let users = this.props.users.map(data => <UserContainer key={data.id} id={data.id} follow={data.followed}
                                                            fullName={data.name}
                                                            status={data.status} country={"data.location.country"}
                                                            city={"data.location.city"}
                                                            photoUrl={data.photos}/>)
        return(
                <div className={users_class.container}>
                    {users}
                </div>
        );
    }
}

export default Users;