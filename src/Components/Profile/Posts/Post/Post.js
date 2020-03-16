import React from 'react';
import post_class from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={post_class.item}><img src={props.image}/>
                {props.message} <span>Like {props.likeCount}</span></div>
        </div>
    );
}

export default Post;