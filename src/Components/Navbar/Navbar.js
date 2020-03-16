import React from 'react';
import nav_class from './Navbar.module.css';

const Navbar = () => {
    return (<nav className={nav_class.nav}>
        <div className={nav_class.item}><a href="/profile">Profile</a></div>
        <div className={nav_class.item}><a href="/messages">Messages</a></div>
        <div className={nav_class.item}><a href="/news">News</a></div>
        <div className={nav_class.item}><a href="/music">Music</a></div>
        <div className={nav_class.item}><a href="/settings">Settings</a></div>
    </nav>);
}

export default Navbar;