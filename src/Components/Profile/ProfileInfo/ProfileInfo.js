import React from 'react';
import profileInfo_class from './ProfileInfo.module.css';
import Avatar from './Avatar/Avatar';
import PersonInfo from "./PersonInfo/PersonInfo";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={profileInfo_class.profile}>
                <Avatar avatarImg={props.photos.large} putPhoto={props.putPhoto}/>
                <div className={profileInfo_class.info}>
                    <PersonInfo {...props} key={props.userId} status={props.status} putStatus={props.putStatus}
                                setEditMod={props.setEditMod} isEdit={props.isEdit} putProfileInfo={props.putProfileInfo}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;