import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";


/*let FriendsContainer = (props) => {
    return(<Friends friends={props.friends}/>)
}*/

let mapStateToProps = (state) => {
    return{
        friends: state.messagesPage.dialogsData
    }
}

let FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;