import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {getUserProfile} from "../../../Data/ProfileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../Hoc/withRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

class ProfileInfoContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 6682;
        this.props.getUserProfile(userId);
    }

    render() {
        debugger;
        return (<ProfileInfo {...this.props.profileInfo}/>)
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileInfoContainer)