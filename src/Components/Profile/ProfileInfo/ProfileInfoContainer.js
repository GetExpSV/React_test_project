import React from 'react';
import ProfileInfo from "./ProfileInfo";

let ProfileInfoContainer = (props) => {
    let personInfo = props.store.getState().profilePage.personInfoData;
    return(<ProfileInfo personInfo={personInfo}/>);
}

export default ProfileInfoContainer;