import React from 'react';
import Post from "./Post";
import {addLikeToPost} from "../../../../Data/ProfileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state, {id, image, message, likeCount}) => {
    return{
        id: id,
        image: image,
        message: message,
        likeCount: likeCount
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return{
        addLike: (id) => {
            dispatch(addLikeToPostActionCreator(id))
        }
    }
}*/

let PostContainer = connect(mapStateToProps, {addLikeToPost})(Post);

export default PostContainer;