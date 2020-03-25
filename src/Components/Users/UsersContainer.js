import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
    }
}

let UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;