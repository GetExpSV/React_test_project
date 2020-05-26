import React from 'react';
import {connect} from "react-redux";
import profile_class from './Profile.module.css';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import PostsContainer from "./Posts/PostsContainer";


class Profile extends React.Component {
    render() {
        return (
            <div className={profile_class.content}>
                <div>
                    <ProfileInfoContainer/>
                    <PostsContainer/>
                </div>
            </div>
        );
    }
}

let ProfileContainer = connect()(Profile);

export default ProfileContainer;