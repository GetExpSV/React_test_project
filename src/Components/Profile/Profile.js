import React from 'react';
import profile_class from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    debugger;
    return (<div className={profile_class.content}>
        <div>
            <ProfileInfo personInfo={props.state.personInfoData}/>
            <Posts state={props.state.postsData} newPost={props.state.newPost} dispatch={props.dispatch}/>
        </div>
    </div>);
}

export default Profile;