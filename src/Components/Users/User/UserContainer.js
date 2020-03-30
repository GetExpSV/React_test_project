import React from 'react';
import {connect} from "react-redux";
import User from "./User";
import {follow, unfollow} from "../../../Data/UsersReducer";

let mapStateToProps = (state, {id, followed, fullName, status, country, city, photoUrl}) => {
    return{
        id,
        followed,
        fullName,
        status,
        country,
        city,
        photoUrl
    }
}


let UserContainer = connect(mapStateToProps, {follow, unfollow})(User);

export default UserContainer;