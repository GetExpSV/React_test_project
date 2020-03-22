import React from 'react';
import Profile from './Profile'

let ProfileContainer = (props) => {
    return(<Profile store={props.store}/>);
}

export default ProfileContainer;