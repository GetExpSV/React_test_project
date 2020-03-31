import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import * as axios from 'axios'
import {setprofileInfo} from "../../../Data/ProfileReducer";
import Loader from "../../Loader/Loader";
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setprofileInfo(response.data);
        });
    }

    render(){
        if(!this.props.profileInfo){
            return(<Loader/>)
        }
        return(<ProfileInfo {...this.props.profileInfo}/>)
    }
}

export default connect(mapStateToProps, {setprofileInfo})(withRouter(ProfileInfoContainer));
