import React from 'react';
import post_class from './Post.module.css';

const Post = () => {
    return(
        <div>
            <div className={post_class.item}><img src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"/>
            Post 1 <span>Like</span></div>
            <div className={post_class.item}><img src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg"/>
            Post 2 <span>Like</span></div>
        </div>
    );
}

export default Post;