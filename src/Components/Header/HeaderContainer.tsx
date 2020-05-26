import React from 'react';
import Header from "./Header";
import {connect, ConnectedProps} from 'react-redux';
import {Logout} from "../../Data/Auth";
import {RootState} from "../../Data/Redux-store";

class HeaderContainer extends React.Component<Props>{
    render() {
       return (<Header {...this.props}/>)
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        login: state.profilePage.profileInfo.fullName,
        isAuth: state.auth.isAuth,
        userImage: state.auth.userImage
    }
};

let connector = connect(mapStateToProps, {Logout});
type Props = ConnectedProps<typeof connector>

export default connector(HeaderContainer);
