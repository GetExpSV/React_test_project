import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, newPostChangeActionCreator} from "../../../Data/ProfileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeNewPost: (text) => {
            dispatch(newPostChangeActionCreator(text))
        },
        addNewPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;