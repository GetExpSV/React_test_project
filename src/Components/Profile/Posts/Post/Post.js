import React from 'react';
import post_class from './Post.module.css';

const Post = (value) => {
    return (
        <div>
            <div className={post_class.item}><img src={value.image}/>
                {value.message} <span>Like {value.likeCount}</span></div>
        </div>
    );
}

export default Post;