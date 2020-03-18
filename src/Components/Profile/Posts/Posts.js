import React from 'react'
import posts_class from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {
    let image = "http://getdrawings.com/img/silhouette-avatar-12.png";
    let posts = props.data.map(data => <Post id={data.id} image={image} message={data.message} likeCount={data.likeCount} addLikeToPost={props.addLikeToPost}/>);

    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        let postId = props.data[props.data.length-1].id + 1;
        let post = {id: postId, message: text, likeCount: 0};
        props.addPost(post);
        newPost.current.value = '';
    }

    return (<div className={posts_class.newPost}>New Post
        <div>
            <textarea ref={newPost}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
            {posts}
        </div>
    </div>);
}

export default Posts;