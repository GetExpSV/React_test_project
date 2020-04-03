import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {userProfile} from "../../../Data/ProfileReducer";
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
        if (!userId) userId = 2;

        this.props.userProfile(userId);
    }

    render() {
        if (!this.props.profileInfo) {
            return (<Loader/>)
        }
        return (<ProfileInfo {...this.props.profileInfo}/>)
    }
}

export default connect(mapStateToProps, {userProfile})(withRouter(ProfileInfoContainer));
