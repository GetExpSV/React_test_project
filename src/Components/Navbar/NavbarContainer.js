import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";

/*let NavbarContainer = (props) => {
    return(<Navbar dialogsData={props.store.getState().messagesPage.dialogsData}/>)
}*/



let NavbarContainer = connect()(Navbar);

export default NavbarContainer;