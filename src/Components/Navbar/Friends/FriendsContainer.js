import React from 'react';
import Friends from "./Friends";


let FriendsContainer = (props) => {
    return(<Friends friends={props.friends}/>)
}

export default FriendsContainer;