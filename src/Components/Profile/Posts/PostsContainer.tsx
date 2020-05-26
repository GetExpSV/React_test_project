import React from 'react';
import {addPost, addLikeToPost} from "../../../Data/ProfileReducer";
import {connect, ConnectedProps} from "react-redux";
import {initialize} from 'redux-form';
import posts_class from './Posts.module.css';
import PostContainer from "./Post/PostContainer";
import PostReduxForm, {formProps} from "./postForm";
import {RootState} from "../../../Data/Redux-store";

const Posts: React.FC<Props> = (props) => {
    let image = "http://getdrawings.com/img/silhouette-avatar-12.png";
    let posts = props.postsData.map(data => <PostContainer id={data.id} image={image} message={data.message}
                                                           likeCount={data.likeCount} key={data.id} addLikeToPost={props.addLikeToPost}/>);

    let addPost = (formData: formProps) => {
        props.addPost(formData.text);
    };

    return (<div className={posts_class.newPost}>New Post
        <div>
            <PostReduxForm onSubmit={addPost}/>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
            {posts}
        </div>
    </div>);
};


let mapStateToProps = (state: RootState) => {
    return{
        postsData: state.profilePage.postsData
    }
};

let connector = connect(mapStateToProps, {addPost, initialize, addLikeToPost});
type Props = ConnectedProps<typeof connector>

export default connector(Posts);