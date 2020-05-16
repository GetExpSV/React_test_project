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
}

type profileStateType = typeof initialProfile

type newPostChangeActionType = {
    type: typeof newPostChangeType,
    text: string
}
export const newPostChange = (text: string): newPostChangeActionType => {
    return {type: newPostChangeType, text: text}
};

type addPostActionType = {
    type: typeof addPostType
}
export const addPost = (): addPostActionType => {
    return {type: addPostType}
};

type addLikeToPostActionType = {
    type: typeof addLikeToPostType,
    id: number
}
export const addLikeToPost = (id: number): addLikeToPostActionType => {
    return {type: addLikeToPostType, id: id}
};

type setProfileInfoActionType = {
    type: typeof setprofileInfoType,
    profileInfo: any
}
export const setProfileInfo = (profileInfo: any): setProfileInfoActionType => {
    return {type: setprofileInfoType, profileInfo}
}

type setStatusActionType = {
    type: typeof setStatusType,
    status: string
}
export const setStatus = (status: string): setStatusActionType => {
    return {type: setStatusType, status}
}

type changeStatusActionType = {
    type: typeof changeStatusType,
    status: string
}
export const changeStatus = (status: string): changeStatusActionType => {
    return {type: changeStatusType, status}
}

type setEditModActionType = {
    type: typeof setEditModType,
    isEdit: boolean
}
export const setEditMod = (isEdit: boolean): setEditModActionType => {
    return {type: setEditModType, isEdit}
}

type profileActions =
    | newPostChangeActionType
    | addPostActionType
    | addLikeToPostActionType
    | setProfileInfoActionType
    | setStatusActionType
    | changeStatusActionType
    | setEditModActionType

let profileReducer = (state = initialProfile, action: profileActions): profileStateType => {
    switch (action.type) {
        case newPostChangeType:
            return {
                ...state,
                newPost: action.text
            };
        case addPostType:
            let postId = state.postsData[state.postsData.length - 1].id + 1;
            let text = state.newPost
            return {
                ...state,
                postsData: [...state.postsData, {id: postId, message: text, likeCount: 0}],
                newPost: ''
            };
        case addLikeToPostType:
            return {
                ...state,
                postsData: state.postsData.map(data => {
                    if (data.id === action.id) {
                        return {...data, likeCount: ++data.likeCount}
                    }
                    return data;
                })
            }
        case setprofileInfoType:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case setStatusType:
            return {
                ...state,
                status: action.status
            }
        case changeStatusType:
            return {
                ...state,
                status: action.status
            }
        case setEditModType:
            return {
                ...state,
                isEdit: action.isEdit
            }
        default:
            return state;
    }

}


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await UsersApi.userProfile(userId)
    dispatch(setProfileInfo(response))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await UsersApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const putStatus = (status: string) => async (dispatch: any) => {
    UsersApi.setStatus(status);
}

export const putProfileInfo = (profile: any) => async (dispatch: any, getState: any) => {
    let response = await UsersApi.putProfileInfo(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.id));
        dispatch(setEditMod(false));
    } else {
        dispatch(stopSubmit('PersonInfo', {_error: response.data.messages[0]}))
    }
}

export const putPhoto = (image: string) => async (dispatch: any, getState: any) => {
    let response = await UsersApi.putPhoto(image);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.id));
    } else {
        console.log(response)
    }
}

export default profileReducer