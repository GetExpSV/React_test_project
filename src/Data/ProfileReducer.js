import {UsersApi} from "../Api/UsersApi";
import {stopSubmit} from "redux-form";

const newPostChangeType = 'NEW-POST-CHANGE';
const addPostType = 'ADD-POST';
const addLikeToPostType = 'ADD-LIKE-TO-POST';
const setprofileInfoType = 'SET-PERSON-INFO';
const setStatusType = 'SET-STATUS';
const changeStatusType = 'CHANGE-STATUS';
const setEditModType = 'SET-EDIT-MOD';

let initialProfile = {
    postsData: [{id: 1, message: 'Post 1', likeCount: 5}, {id: 2, message: 'Post 2', likeCount: 3}],
    profileInfoData: [{id: 1, name: 'Vladislav', surname: 'Savinykh', birthday: '01.01.0000'}],
    newPost: '',
    profileInfo: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }
    },
    status: '',
    isEdit: false
};

let profileReducer = (state= initialProfile, action) => {
    switch(action.type){
        case newPostChangeType:
            return {
                ...state,
                newPost: action.text
            };
        case addPostType:
            let postId = state.postsData[state.postsData.length -1].id + 1;
            let text = state.newPost
            return {
                ...state,
                postsData: [...state.postsData, {id: postId, message: text, likeCount: 0}],
                newPost: ''
            };
        case addLikeToPostType:
            return {
                ...state,
                postsData: state.postsData.map(data=> {
                    if(data.id === action.id) {
                        return{...data, likeCount: ++data.likeCount}
                    }
                    return data;
                })
            }
        case setprofileInfoType:
            return{
                ...state,
                profileInfo: action.profileInfo
        }
        case setStatusType:
            return{
                ...state,
                status: action.status
        }
        case changeStatusType:
            return{
                ...state,
                status: action.status
        }
        case setEditModType:
            return{
                ...state,
                isEdit: action.isEdit
            }
        default: return state;
    }

}

export const newPostChange = (text) => { return {type: newPostChangeType, text: text}};
export const addPost = () => {return {type: addPostType}};
export const addLikeToPost = (id) => {return {type: addLikeToPostType, id: id}};
export const setProfileInfo = (profileInfo) => {return{type: setprofileInfoType, profileInfo}}
export const setStatus = (status) => {return {type: setStatusType, status}}
export const changeStatus = (status) => {return{type: changeStatusType, status}}
export const setEditMod = (isEdit) =>{return{type: setEditModType, isEdit}}


export const getUserProfile = (userId) => {
    return (dispatch)=>{
        UsersApi.userProfile(userId).then(data=>{
            dispatch(setProfileInfo(data));
        })
    }
}

export const getStatus = (userId) => (dispatch) =>{
    UsersApi.getStatus(userId).then(response =>{
        dispatch(setStatus(response.data))
    })
}

export const putStatus = (status) => (dispatch) =>{
    UsersApi.setStatus(status);
}

export const putProfileInfo = (profile) => async (dispatch, getState) =>{
    let response = await UsersApi.putProfileInfo(profile);
    if(response.data.resultCode === 0){
        dispatch(getUserProfile(getState().auth.id));
        dispatch(setEditMod(false));
    }
    else{
        dispatch(stopSubmit('PersonInfo',{_error: response.data.messages[0]}))
    }
}

export const putPhoto = (image) => async (dispatch, getState) =>{
    let response = await UsersApi.putPhoto(image);

    if(response.data.resultCode === 0){
        dispatch(getUserProfile(getState().auth.id));
    }
    else{
        console.log(response)
    }
}

export default profileReducer;