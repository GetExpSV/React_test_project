import React from 'react';
import Posts from "./Posts";
import {addPostActionCreator, newPostChangeActionCreator} from "../../../Data/ProfileReducer";
import {connect} from "react-redux";


/*let PostsContainer = (props) => {

    let onChangeNewPost = (text) => {
        props.store.dispatch(newPostChangeActionCreator(text));
    }

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let state = props.store.getState().profilePage.postsData;
    let newPost = props.store.getState().profilePage.newPost;

    return(<Posts onChangeNewPost={onChangeNewPost} addNewPost={addNewPost} state={state} newPost={newPost}
                  store={props.store}/>)
}*/

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