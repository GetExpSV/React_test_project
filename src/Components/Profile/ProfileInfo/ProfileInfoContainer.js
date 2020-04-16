import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getStatus, getUserProfile} from "../../../Data/ProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        userId: state.auth.id
    }
}

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if(!userId){
                debugger;
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (<ProfileInfo {...this.props.profileInfo}/>)
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus}),
    withRouter
)(ProfileInfoContainer)