import React from 'react';
import {connect} from "react-redux";
import nav_class from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {
    return (<nav className={nav_class.nav}>
        <div className={nav_class.item}>
            <NavLink to="/profile" activeClassName={nav_class.activeLink}>Profile</NavLink>
        </div>
        <div className={nav_class.item}>
            <NavLink to="/messages" activeClassName={nav_class.activeLink}>Messages</NavLink>
        </div>
        <div className={nav_class.item}>
            <NavLink to="/news" activeClassName={nav_class.activeLink}>News</NavLink>
        </div>
        <div className={nav_class.item}>
            <NavLink to="/music" activeClassName={nav_class.activeLink}>Music</NavLink>
        </div>
        <div className={nav_class.item}>
            <NavLink to="/settings" activeClassName={nav_class.activeLink}>Settings</NavLink>
        </div>
        <div className={nav_class.item}>
            <NavLink to="/users" activeClassName={nav_class.activeLink}>Users</NavLink>
        </div>
        <FriendsContainer/>
    </nav>);
}

let NavbarContainer = connect()(Navbar);

export default NavbarContainer;