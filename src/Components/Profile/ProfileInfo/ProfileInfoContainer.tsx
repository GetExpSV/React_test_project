import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect, ConnectedProps} from "react-redux";
import {getStatus, getUserProfile, putPhoto, putProfileInfo, putStatus, setEditMod} from "../../../Data/ProfileReducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import {RootState} from "../../../Data/Redux-store";


let mapStateToProps = (state: RootState) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        userId: state.auth.id,
        status: state.profilePage.status,
        isEdit: state.profilePage.isEdit
    }
};

class ProfileInfoContainer extends React.Component<Props> {

    componentDidMount() {
        let userId: number | null = Number(this.props.match.params.userId);
        if (!userId) {
            userId = this.props.userId;
            if(!userId){
                debugger;
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId as number);
        this.props.getStatus(userId as number)
    }

    render() {
        return (<ProfileInfo {...this.props.profileInfo} status={this.props.status} putStatus={this.props.putStatus}
                             setEditMod={this.props.setEditMod} isEdit={this.props.isEdit}
                             putProfileInfo={this.props.putProfileInfo} putPhoto={this.props.putPhoto}/>)
    }
}

let connector = connect(mapStateToProps, {getUserProfile, getStatus, putStatus, setEditMod, putProfileInfo, putPhoto});
type Props = RouteComponentProps<{userId:string}> & ConnectedProps<typeof connector>

export default connector(withRouter(ProfileInfoContainer))