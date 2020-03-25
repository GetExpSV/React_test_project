import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";



let NavbarContainer = connect()(Navbar);

export default NavbarContainer;