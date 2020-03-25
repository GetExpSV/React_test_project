import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        personInfo: state.profilePage.personInfoData
    }
}

let ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;