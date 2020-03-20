import React from 'react'
import posts_class from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {
    let image = "http://getdrawings.com/img/silhouette-avatar-12.png";
    let posts = props.data.map(data => <Post id={data.id} image={image} message={data.message} likeCount={data.likeCount} dispatch={props.dispatch}/>);

    let newPostArea = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let postChange = () => {
        props.dispatch({type: 'NEW-POST-CHANGE', text: newPostArea.current.value});
    }

    return (<div className={posts_class.newPost}>New Post
        <div>
            <textarea ref={newPostArea} value={props.newPost} onChange={postChange}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div><h2 className={posts_class.posts}>Posts</h2>
            {posts}
        </div>
    </div>);
}

export default Posts;