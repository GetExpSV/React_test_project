import React from 'react';
import profile_class from './Profile.module.css';
import Posts from './Posts/Posts'

const Profile = () => {
    return (<div className={profile_class.content}>
        <div>
            <div className={profile_class.headImg}>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
            </div>
            <div className={profile_class.profile}>
                <div className={profile_class.avatar}>
                    <img
                        src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"/>
                </div>
                <div className={profile_class.info}>
                    <div>Name</div>
                    <div>Surname</div>
                    <div>Birthday</div>
                </div>
            </div>
            <Posts/>
        </div>
    </div>);
}

export default Profile;