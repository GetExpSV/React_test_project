import React from 'react';
import Posts from "./Posts";
import {addPost, newPostChange} from "../../../Data/ProfileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    }
}

let PostsContainer = connect(mapStateToProps, {newPostChange, addPost})(Posts);

export default PostsContainer;