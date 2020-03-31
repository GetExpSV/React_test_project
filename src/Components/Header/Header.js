import React from 'react';
import header_class from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={header_class.header}>
        <img src="https://thelogo.shop/wp-content/uploads/2016/12/09-Letter-B.png"/>
        <div className={header_class.Item}>
            <img src={props.userImage}/>
        </div>
        <div className={header_class.authItem}>
            {props.isAuth ? props.login : <NavLink to={`/login`}>Login</NavLink>}
        </div>
    </header>);
}

export default Header;