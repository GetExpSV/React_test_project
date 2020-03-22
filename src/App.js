import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import News from './Components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import MessagesContainer from "./Components/Messages/MessagesContainer";


const App = (props) => {
    let profileComponent = () => <ProfileContainer store={props.store}/>;
    let messagesComponent = () => <MessagesContainer store={props.store}/>;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer store={props.store}/>
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
