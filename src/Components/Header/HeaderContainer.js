import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUser, setImage, setIsAuth} from "../../Data/Auth";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setIsAuth(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response=>{
            if(response.data.resultCode === 0){
                let data = response.data.data;
                this.props.setAuthUser(data.id, data.login, data.email);
                this.props.setIsAuth(true);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + data.id).then(response=>{
                    this.props.setImage(response.data.photos.small);
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