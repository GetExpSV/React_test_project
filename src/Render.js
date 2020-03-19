import App from "./App";
import {addMessage, addPost, addLikeToPost, newPostChange} from "./Data/Data";
import React from "react";
import ReactDOM from "react-dom";


export let renderTree = (data) => {
    ReactDOM.render(<App data={data} addPost={addPost} addMessage={addMessage} addLikeToPost={addLikeToPost}
                         newPostChange={newPostChange}/>, document.getElementById('root'));
}