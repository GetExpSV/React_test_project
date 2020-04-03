import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth,} from "../../Data/Auth";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.auth();
    }

    render(){
        return(<Header {...this.props}/>);
    }
}

let mapStateToProps = (state) => {
    return{
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        userImage: state.auth.userImage
    }
}

export default connect(mapStateToProps, {auth})(HeaderContainer);