import React from 'react';
import profile_class from './Profile.module.css';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (<div className={profile_class.content}>
        <div>
            <ProfileInfoContainer/>
            <PostsContainer/>
        </div>
    </div>);
}

export default Profile;