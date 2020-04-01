import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUser, setImage, setIsAuth} from "../../Data/Auth";
import {UsersApi} from "../../Api/UsersApi";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setIsAuth(false);
        UsersApi.userAuth().then(response=>{
            if(response.data.resultCode === 0){
                let user = response.data.data;
                this.props.setAuthUser(user.id, user.login, user.email);
                this.props.setIsAuth(true);
                UsersApi.userProfile(user.id).then(data=>{
                    this.props.setImage(data.photos.small);
                })
            }
        })
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

export default connect(mapStateToProps, {setAuthUser, setIsAuth, setImage})(HeaderContainer);