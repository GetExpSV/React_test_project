import React from 'react';
import Profile from './Profile'
import {connect} from "react-redux";

let ProfileContainer = connect()(Profile);

export default ProfileContainer;