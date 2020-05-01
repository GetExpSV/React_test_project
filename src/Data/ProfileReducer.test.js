import React from 'react';
import ProfileReducer, {
    addLikeToPost,
    addPost,
    changeStatus,
    newPostChange,
    setProfileInfo,
    setStatus
} from "./ProfileReducer";

let initialProfile = {
    postsData: [{id: 1, message: 'Post 1', likeCount: 5}, {id: 2, message: 'Post 2', likeCount: 3}],
    profileInfoData: [{id: 1, name: 'Vladislav', surname: 'Savinykh', birthday: '01.01.0000'}],
    newPost: 'text',
    profileInfo: {fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }},
    status: ''
};

test('must add like to post', () => {
    let action = addLikeToPost(1)
    let result = ProfileReducer(initialProfile, action);
    expect(result.postsData[0].likeCount).toBe(6)
});

test('must change new post text', () => {
    let action = newPostChange("some text");
    let result = ProfileReducer(initialProfile, action);
    expect(result.newPost).toBe("some text")
});

test('must add post and make newPost empty', () => {
    let action = addPost();
    let result = ProfileReducer(initialProfile, action);
    expect(result.postsData.length).toBe(3)
    expect(result.newPost).toBe("")
});

test('must add profile info', () => {
    let action = setProfileInfo({fullName: "jack", userId: 3});
    let result = ProfileReducer(initialProfile, action);
    expect(result.profileInfo.fullName).toBe("jack")
    expect(result.profileInfo.userId).toBe(3)
});

test('must set status', () => {
    let action = setStatus("status here");
    let result = ProfileReducer(initialProfile, action);
    expect(result.status).toBe("status here")
});

test('must change status', () => {
    let action = changeStatus("change status");
    let result = ProfileReducer(initialProfile, action);
    expect(result.status).toBe("change status")
});