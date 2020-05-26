import React from 'react';
import profileInfo_class from './ProfileInfo.module.css';
import Avatar from './Avatar/Avatar';
import PersonInfo, {PropsForInitial} from "./PersonInfo/PersonInfo";
import {contactsType} from "../../../Data/ProfileReducer";

type Props = {
    photos:{
        large: string | null
    }
    userId: number | null
    status: string
    isEdit: boolean
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    aboutMe: string | null
    contacts: any

    putPhoto: (image: File) => void
    putStatus: (status: string) => void
    setEditMod: (isEdit: boolean) => void
    putProfileInfo: (profile: PropsForInitial) => void
}

const ProfileInfo: React.FC<Props> = (props) => {
    return (
        <div>
            <div className={profileInfo_class.profile}>
                <Avatar avatarImg={props.photos.large || ""} putPhoto={props.putPhoto}/>
                <div className={profileInfo_class.info}>
                    <PersonInfo {...props} status={props.status} putStatus={props.putStatus}
                                setEditMod={props.setEditMod} isEdit={props.isEdit} putProfileInfo={props.putProfileInfo}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;