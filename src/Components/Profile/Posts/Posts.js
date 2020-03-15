import React from 'react'
import posts_class from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
    return (<div className={posts_class.newPost}>New Post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
        <Post/>
        <Post/>
        </div>
    </div>);
}

export default Posts;