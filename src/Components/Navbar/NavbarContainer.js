import React from 'react';
import Navbar from "./Navbar";

let NavbarContainer = (props) => {
    return(<Navbar dialogsData={props.store.getState().messagesPage.dialogsData}/>)
}

export default NavbarContainer;