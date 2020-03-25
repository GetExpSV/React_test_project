import React from 'react';
import UserContainer from "./User/UserContainer";
import users_class from './Users.module.css'

let Users = (props) => {

    let users = props.users.map(data => <UserContainer key={data.id} id={data.id} follow={data.follow}
                                                       fullName={data.fullName}
                                                       status={data.status} country={data.location.country}
                                                       city={data.location.city}
                                                       photoUrl={data.photoUrl}/>)
    return (
        <div className={users_class.container}>
            {users}
        </div>
    );
}

export default Users;