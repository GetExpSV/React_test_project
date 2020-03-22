import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
/*import Data from './Data/Data';*/
import store from './Data/Redux-store';
import ReactDOM from "react-dom";
import App from "./App";


let renderTree = () => {
    ReactDOM.render(<App store={store}/>,
        document.getElementById('root'));
}

renderTree();

store.subscribe(renderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
