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
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
    let profileContainer = () => <ProfileContainer />;
    let messagesContainer = () => <MessagesContainer />;
    let usersContainer = () => <UsersContainer/>
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route exact path="/" render={profileContainer}/>
                    <Route path="/profile/:userId?" render={profileContainer}/>
                    <Route path="/messages" render={messagesContainer}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={usersContainer}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
