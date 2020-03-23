import React from 'react';
import Profile from './Profile'
import {connect} from "react-redux";

/*let ProfileContainer = (props) => {
    return(<Profile store={props.store}/>);
}*/

let ProfileContainer = connect()(Profile);

export default ProfileContainer;