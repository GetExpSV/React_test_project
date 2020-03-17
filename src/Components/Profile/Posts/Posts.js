import React from 'react'
import posts_class from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {
    let image = "http://getdrawings.com/img/silhouette-avatar-12.png";
    let posts = props.data.map(data => <Post image={image} message={data.message} likeCount={data.likeCount}/>);

    return (<div className={posts_class.newPost}>New Post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
            {posts}
        </div>
    </div>);
}

export default Posts;