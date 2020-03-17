import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let personData =
    [{id: 1, name: 'Vasya'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Vova'},
            {id: 4, name: 'Alex'},
            {id: 5, name: "Ivan"},
            {id: 6, name: 'Anna'},
            {id: 7, name: 'Mikhail'},
            {id: 8, name: 'Ivanov'}];

let messagesData =
    [{id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'}];

let postsData =
    [{id: 1, message: 'Post 1', likeCount: 5},
            {id: 2, message: 'Post 2', likeCount: 3}];

let Data = {
        personData: personData,
        messagesData: messagesData,
        postsData: postsData
}

ReactDOM.render(<App data={Data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
