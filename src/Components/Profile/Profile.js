import React from 'react';
import profile_class from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (<div className={profile_class.content}>
        <div>
            <ProfileInfo personInfo={props.data.personInfoData}/>
            <Posts data={props.data.postsData} addPost={props.addPost} addLikeToPost={props.addLikeToPost}
                   newPostChange={props.newPostChange} newPost={props.data.newPost}/>
        </div>
    </div>);
}

export default Profile;