import React from 'react';
import nav_class from './Navbar.module.css';

const Navbar = () => {
    return (<nav className={nav_class.nav}>
        <div className={nav_class.item}><a href="#s">Profile</a></div>
        <div className={nav_class.item}><a href="#s">Messages</a></div>
        <div className={nav_class.item}><a href="#s">News</a></div>
        <div className={nav_class.item}><a href="#s">Music</a></div>
        <div className={nav_class.item}><a href="#s">Settings</a></div>
    </nav>);
}

export default Navbar;