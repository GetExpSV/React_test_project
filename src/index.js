import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Data, {addLikeToPost, addMessage, addPost, newPostChange, subscribe} from './Data/Data';
import ReactDOM from "react-dom";
import App from "./App";


let renderTree = (data) => {
    ReactDOM.render(<App data={data} addPost={addPost} addMessage={addMessage} addLikeToPost={addLikeToPost}
                         newPostChange={newPostChange}/>, document.getElementById('root'));
}

renderTree(Data);

subscribe(renderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
