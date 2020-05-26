import {UsersApi} from "../Api/UsersApi";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import { RootState } from "./Redux-store";
import {Action} from "redux";

const newPostChangeType = 'NEW-POST-CHANGE';
const addPostType = 'ADD-POST';
const addLikeToPostType = 'ADD-LIKE-TO-POST';
const setprofileInfoType = 'SET-PERSON-INFO';
const setStatusType = 'SET-STATUS';
const changeStatusType = 'CHANGE-STATUS';
const setEditModType = 'SET-EDIT-MOD';

type postsDataType = {
    id: number,
    message: string,
    likeCount: number
}
type profileInfoDataType = {
    id: number,
    name: string,
    surname: string,
    birthday: string
}
export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type photosType = {
    small: string | null
    large: string | null
}
type PropsForInitial = {
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    aboutMe: string | null
    contacts: Array<contactsType>
}
export type ProfileInfoType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string | null
    userId: number
    photos: photosType
}
let initialProfile = {
    postsData: [{id: 1, message: 'Post 1', likeCount: 5}, {
        id: 2,
        message: 'Post 2',
        likeCount: 3
    }] as Array<postsDataType>,
    profileInfoData: [{
        id: 1,
        name: 'Vladislav',
        surname: 'Savinykh',
        birthday: '01.01.0000'
    }] as Array<profileInfoDataType>,
    profileInfo: {
        aboutMe: null as string | null,
        contacts: {
            github: null as string | null,
            vk: null as string | null,
            facebook: null as string | null,
            instagram: null as string | null,
            twitter: null as string | null,
            website: null as string | null,
            youtube: null as string | null,
            mainLink: null as string | null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null as string | null,
        fullName: null as string | null,
        userId: null as number | null,
        photos: {
            small: null as string | null,
            large: null as string | null
        }
    },
    status: '',
    isEdit: false
};

type profileStateType = typeof initialProfile

type addPostActionType = {
    type: typeof addPostType,
    text: string
}
export const addPost = (text: string): addPostActionType => {
    return {type: addPostType, text}
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
    profileInfo: ProfileInfoType
}
export const setProfileInfo = (profileInfo: ProfileInfoType): setProfileInfoActionType => {
    return {type: setprofileInfoType, profileInfo}
};

type setStatusActionType = {
    type: typeof setStatusType,
    status: string
}
export const setStatus = (status: string): setStatusActionType => {
    return {type: setStatusType, status}
};

type changeStatusActionType = {
    type: typeof changeStatusType,
    status: string
}
export const changeStatus = (status: string): changeStatusActionType => {
    return {type: changeStatusType, status}
};

type setEditModActionType = {
    type: typeof setEditModType,
    isEdit: boolean
}
export const setEditMod = (isEdit: boolean): setEditModActionType => {
    return {type: setEditModType, isEdit}
};

type profileActions =
    | addPostActionType
    | addLikeToPostActionType
    | setProfileInfoActionType
    | setStatusActionType
    | changeStatusActionType
    | setEditModActionType

let profileReducer = (state = initialProfile, action: profileActions): profileStateType => {
    switch (action.type) {
        case addPostType:
            let postId = state.postsData[state.postsData.length - 1].id + 1;
            let text = action.text;
            return {
                ...state,
                postsData: [...state.postsData, {id: postId, message: text, likeCount: 0}]
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
            };
        case setprofileInfoType:
            return {
                ...state,
                profileInfo: action.profileInfo
            };
        case setStatusType:
            return {
                ...state,
                status: action.status
            };
        case changeStatusType:
            return {
                ...state,
                status: action.status
            };
        case setEditModType:
            return {
                ...state,
                isEdit: action.isEdit
            };
        default:
            return state;
    }

};


export const getUserProfile = (userId: number | null): ThunkAction<void, RootState, unknown, profileActions> => async (dispatch) => {
    let response = await UsersApi.userProfile(userId);
    dispatch(setProfileInfo(response))
};

export const getStatus = (userId: number): ThunkAction<void, RootState, unknown, profileActions> => async (dispatch) => {
    let response = await UsersApi.getStatus(userId);
    dispatch(setStatus(response.data))
};

export const putStatus = (status: string): ThunkAction<void, RootState, unknown, profileActions> => async (dispatch) => {
    UsersApi.setStatus(status);
};

export const putProfileInfo = (profile: PropsForInitial): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch, getState) => {
    let response = await UsersApi.putProfileInfo(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.id));
        dispatch(setEditMod(false));
    } else {
        dispatch(stopSubmit('PersonInfo', {_error: response.data.messages[0]}))
    }
};

export const putPhoto = (image: File): ThunkAction<void, RootState, unknown, profileActions> => async (dispatch, getState) => {
    let response = await UsersApi.putPhoto(image);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.id));
    } else {
        console.log(response)
    }
};

export default profileReducer