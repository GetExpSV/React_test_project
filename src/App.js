import React from 'react';
import './App.css';
import Footer from "./Components/Footer/Footer";
import News from './Components/News/News';
import {Route, withRouter} from 'react-router-dom';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Data/app-reducer";
import {compose} from "redux";
import Loader from "./Components/Loader/Loader";


class App extends React.Component{

    componentDidMount(){
        this.props.initializeApp()
    }

    profileContainer = () => <ProfileContainer />;
    messagesContainer = () => <MessagesContainer />;
    usersContainer = () => <UsersContainer/>;

    render()
    {
        if(!this.props.initialized)
        {
            return <Loader/>
        }
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route exact path="/" render={this.profileContainer}/>
                    <Route path="/profile/:userId?" render={this.profileContainer}/>
                    <Route path="/messages" render={this.messagesContainer}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={this.usersContainer}/>
                    <Route path="/login" render={()=><Login/>}/>
                </div>
                <Footer/>
            </div>
    );
    }
}

let mapStateToProps = (state) =>{
    return{
        initialized: state.app.initialized
    }
}

export default compose(connect(mapStateToProps, {initializeApp}), withRouter)(App)
