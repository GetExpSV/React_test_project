import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Messages from "./Components/Messages/Messages";
import News from './Components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';


const App = (props) => {
    let profileComponent = () => <Profile data={props.data.profilePage} addPost={props.addPost}
                                          addLikeToPost={props.addLikeToPost} newPostChange={props.newPostChange}/>;
    let messagesComponent = () => <Messages data={props.data.messagesPage} addMessage={props.addMessage}/>;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.data.messagesPage}/>
                <div className="app-wrapper-content">
                    <Route exact path="/" render={profileComponent}/>
                    <Route path="/profile" render={profileComponent}/>
                    <Route path="/messages" render={messagesComponent}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
