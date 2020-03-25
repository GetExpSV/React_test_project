import React from 'react'
import posts_class from './Posts.module.css';
import PostContainer from "./Post/PostContainer";

const Posts = (props) => {
    debugger;
    let image = "http://getdrawings.com/img/silhouette-avatar-12.png";
    let posts = props.postsData.map(data => <PostContainer id={data.id} image={image} message={data.message}
                                                           likeCount={data.likeCount} key={data.id}/>);

    let addPost = () => {
        props.addNewPost();
    }

    let postChange = (e) => {
        props.onChangeNewPost(e.target.value);
    }

    return (<div className={posts_class.newPost}>New Post
        <div>
            <textarea value={props.newPost} onChange={postChange}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
            {posts}
        </div>
    </div>);
}

export default Posts;