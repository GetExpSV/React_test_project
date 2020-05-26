import React from 'react';
import header_class from './Header.module.css';
import {NavLink} from "react-router-dom";
import photo from '../../Images/users.png'

type headerType = {
    login: string | null,
    isAuth: boolean | null,
    userImage: string | null,
    Logout: () => any
}

const Header: React.FC<headerType> = (props) => {
    return (<header className={header_class.header}>
        <img src="https://thelogo.shop/wp-content/uploads/2016/12/09-Letter-B.png" alt={""}/>
        <div className={header_class.Item}>
            <img src={props.userImage || photo} alt={"user img"}/>
        </div>
        <div className={header_class.authItem}>
            {props.isAuth ? props.login : <NavLink to={`/login`}>Login</NavLink>}
            {props.isAuth ? <button onClick={props.Logout}>Logout</button>:""}
        </div>
    </header>);
};

export default Header;