import React from 'react';
import {connect} from "react-redux";
import User from "./User";
import {followAC, unfollowAC} from "../../../Data/UsersReducer";

let mapStateToProps = (state, {id, follow, fullName, status, country, city, photoUrl}) => {
    return{
        id,
        follow,
        fullName,
        status,
        country,
        city,
        photoUrl
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        followUser: (id) => {
            dispatch(followAC(id));
        },
        unfollowUser: (id) => {
            dispatch(unfollowAC(id));
        }
    }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;