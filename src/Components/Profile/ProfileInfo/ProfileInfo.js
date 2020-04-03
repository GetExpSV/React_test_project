import React from 'react';
import profileInfo_class from './ProfileInfo.module.css';
import HeaderImg from "./HeaderImg/HeaderImg";
import Avatar from './Avatar/Avatar';
import PersonInfo from "./PersonInfo/PersonInfo";

const ProfileInfo = (props) => {
    let headerImg = "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";
    return (
        <div>
            <HeaderImg img={headerImg}/>
            <div className={profileInfo_class.profile}>
                <Avatar avatarImg={props.photos.large}/>
                <div className={profileInfo_class.info}>
                    <PersonInfo name={props.fullName} key={props.userId}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;