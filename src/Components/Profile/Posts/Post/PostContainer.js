import React from 'react';
import Post from "./Post";
import {addLikeToPostActionCreator} from "../../../../Data/ProfileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state, {id, image, message, likeCount}) => {
    return{
        id: id,
        image: image,
        message: message,
        likeCount: likeCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addLike: (id) => {
            dispatch(addLikeToPostActionCreator(id))
        }
    }
}

let PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;