import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {setUsers} from "../../Data/UsersReducer";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;