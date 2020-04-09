import React from 'react'
import posts_class from './Posts.module.css';
import PostContainer from "./Post/PostContainer";
import PostReduxForm from "./postForm";
/*import {Field, reduxForm, reset} from "redux-form";

let postForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
            <div>
                <Field component={"textarea"} name={"text"} placeholder={"Post here"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let afterSubmit = (result, dispatch) =>{
    dispatch(reset('post'))
}

let PostReduxForm = reduxForm({form: 'post', onSubmitSuccess: afterSubmit})(postForm)*/

const Posts = (props) => {
    let image = "http://getdrawings.com/img/silhouette-avatar-12.png";
    let posts = props.postsData.map(data => <PostContainer id={data.id} image={image} message={data.message}
                                                           likeCount={data.likeCount} key={data.id}/>);

    let addPost = (formData) => {
        props.addPost();
    }

    let postChange = (e) => {
        props.newPostChange(e.text);
    }
    props.initialize('post', {text: props.newPost})

    return (<div className={posts_class.newPost}>New Post
        <div>
            <PostReduxForm onSubmit={addPost} onChange={postChange}/>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
            {posts}
        </div>
    </div>);
}

export default Posts;