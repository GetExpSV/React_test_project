import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";

/*let ProfileInfoContainer = (props) => {
    let personInfo = props.store.getState().profilePage.personInfoData;
    return(<ProfileInfo personInfo={personInfo}/>);
}*/

let mapStateToProps = (state) => {
    return {
        personInfo: state.profilePage.personInfoData
    }
}

let ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;