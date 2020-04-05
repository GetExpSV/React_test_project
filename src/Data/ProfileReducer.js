import {UsersApi} from "../Api/UsersApi";

const newPostChangeType = 'NEW-POST-CHANGE';
const addPostType = 'ADD-POST';
const addLikeToPostType = 'ADD-LIKE-TO-POST';
const setprofileInfoType = 'SET-PERSON-INFO';

let initialProfile = {
    postsData: [{id: 1, message: 'Post 1', likeCount: 5}, {id: 2, message: 'Post 2', likeCount: 3}],
    profileInfoData: [{id: 1, name: 'Vladislav', surname: 'Savinykh', birthday: '01.01.0000'}],
    newPost: '',
    profileInfo: {fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }}
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
        default: return state;
    }

}

export const newPostChange = (text) => { return {type: newPostChangeType, text: text}};
export const addPost = () => {return {type: addPostType}};
export const addLikeToPost = (id) => {return {type: addLikeToPostType, id: id}};
export const setProfileInfo = (profileInfo) => {return{type: setprofileInfoType, profileInfo}}

export const getUserProfile = (userId) => {
    return (dispatch)=>{
        UsersApi.userProfile(userId).then(data=>{
            dispatch(setProfileInfo(data));
        })
    }
}

export default profileReducer;