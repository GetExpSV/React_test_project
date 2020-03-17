import React from 'react';
import profile_class from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (<div className={profile_class.content}>
        <div>
            <ProfileInfo/>
            <Posts data={props.postsData}/>
        </div>
    </div>);
}

export default Profile;