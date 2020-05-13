import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getStatus, getUserProfile, putPhoto, putProfileInfo, putStatus, setEditMod} from "../../../Data/ProfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        userId: state.auth.id,
        status: state.profilePage.status,
        isEdit: state.profilePage.isEdit
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
        return (<ProfileInfo {...this.props.profileInfo} status={this.props.status} putStatus={this.props.putStatus}
                             setEditMod={this.props.setEditMod} isEdit={this.props.isEdit}
                             putProfileInfo={this.props.putProfileInfo} putPhoto={this.props.putPhoto}/>)
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, putStatus, setEditMod, putProfileInfo, putPhoto}),
    withRouter
)(ProfileInfoContainer)