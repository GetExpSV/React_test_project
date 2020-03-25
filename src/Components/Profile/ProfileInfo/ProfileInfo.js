import React from 'react';
import profileInfo_class from './ProfileInfo.module.css';
import HeaderImg from "./HeaderImg/HeaderImg";
import Avatar from './Avatar/Avatar';
import PersonInfo from "./PersonInfo/PersonInfo";

const ProfileInfo = (props) => {
    let avatarImg = "http://getdrawings.com/img/silhouette-avatar-12.png";
    let headerImg = "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

    let personInfo = props.personInfo.map(data => <PersonInfo name={data.name} surname={data.surname}
                                                            birthDay={data.birthday} key={data.id}/>)
    return (
        <div>
            <HeaderImg img={headerImg}/>
            <div className={profileInfo_class.profile}>
                <Avatar avatarImg={avatarImg}/>
                <div className={profileInfo_class.info}>
                    {personInfo}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;