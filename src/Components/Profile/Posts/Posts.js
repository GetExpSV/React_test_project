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
            <Post
                image="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"
                message="Post 1" likeCount="5"/>
            <Post
                image="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"
                message="Post 2" likeCount="3"/>
        </div>
    </div>);
}

export default Posts;