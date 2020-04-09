import React from 'react';
import Posts from "./Posts";
import {addPost, newPostChange} from "../../../Data/ProfileReducer";
import {connect} from "react-redux";
import {initialize} from 'redux-form';


let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    }
}

let PostsContainer = connect(mapStateToProps, {newPostChange, addPost, initialize})(Posts);

export default PostsContainer;