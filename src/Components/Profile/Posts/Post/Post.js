import React from 'react';
import post_class from './Post.module.css';

const Post = (props) => {
    let addLike = () => {
        props.addLikeToPost(props.id)
    }
    return (
        <div>
            <div className={post_class.item}><img src={props.image}/>
                {props.message} <span onClick={addLike}>Like {props.likeCount}</span></div>
        </div>
    );
}

export default Post;