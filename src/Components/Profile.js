import React from 'react';
import profile_class from './Profile.module.css';

const Profile = () => {
    return (<div className={profile_class.content}>
        <div>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
        </div>
        <div>
            <img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"/>
        </div>
    </div>);
}

export default Profile;