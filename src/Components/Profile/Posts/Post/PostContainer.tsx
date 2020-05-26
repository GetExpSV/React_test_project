import React from 'react';
import post_class from './Post.module.css';

type Props = {
    id: number
    image: string
    message: string
    likeCount: number
    addLikeToPost: (id: number) => void
    key: number
}

const PostContainer: React.FC<Props> = (props) => {
    let addLike = () => {
        props.addLikeToPost(props.id);
    };
    return (
        <div>
            <div className={post_class.item}><img src={props.image} alt={""}/>
                {props.message} <span onClick={addLike}>Like {props.likeCount}</span></div>
        </div>
    );
};


export default PostContainer;