import React from 'react';
import Post from "./Post";
import {addLikeToPostActionCreator} from "../../../../Data/ProfileReducer";

let PostContainer = (props) => {

    let addLike = (id) => {
        props.store.dispatch(addLikeToPostActionCreator(id));
    }

    return(<Post addLike={addLike} id={props.id} image={props.image} message={props.message} likeCount={props.likeCount}/>)
}

export default PostContainer;