import React from 'react'
import posts_class from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {
    let image = "http://getdrawings.com/img/silhouette-avatar-12.png"
    return (<div className={posts_class.newPost}>New Post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
            <Post
                image={image}
                message="Post 1" likeCount="5"/>
            <Post
                image={image}
                message="Post 2" likeCount="3"/>
        </div>
    </div>);
}

export default Posts;