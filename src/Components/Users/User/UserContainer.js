import React from 'react';
import {connect} from "react-redux";
import User from "./User";
import {follow, setFollowing, unfollow} from "../../../Data/UsersReducer";

let mapStateToProps = (state, {id, followed, fullName, status, country, city, photoUrl}) => {
    return{
        followingProgress: state.usersPage.followingProgress,
        id,
        followed,
        fullName,
        status,
        country,
        city,
        photoUrl
    }
}


let UserContainer = connect(mapStateToProps, {follow, unfollow, setFollowing})(User);

export default UserContainer;