import React from 'react';
import {UsersApi} from "../Api/UsersApi";

let followType = 'FOLLOW';
let unfollowType = 'UNFOLLOW';
let newUsers = 'ADD-USERS';
let setTotalUsersCount = 'SET-TOTAL-COUNT';
let setCurrentPageType = 'SET-CURRENT-PAGE';
let setLoadingType = 'SET-LOADING';
let setFollowingProgressType = 'FOLLOWING-PROGRESS';

let initialUsers = {
    users: [],
    pageSize: 25,
    totalCount: 23,
    currentPage: 1,
    isLoading: false,
    followingProgress: []
}

let UsersReducer = (state = initialUsers, action) => {
    switch(action.type){
        case followType:
            return{
                ...state,
                users: state.users.map(data=> {
                    if(data.id === action.id){
                        return{...data, followed: true};
                    }
                    return data;
                })
            }
        case unfollowType:
            return{
                ...state,
                users: state.users.map(data=>{
                    if(data.id === action.id){
                        return{...data, followed: false}
                    }
                    return data;
                })
            }
        case newUsers:
            return{
                ...state,
                users: action.users
            }
        case setTotalUsersCount:
            return{
                ...state,
                totalCount: action.totalCount
            }
        case setCurrentPageType:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case setLoadingType:
            return{
                ...state,
                isLoading: action.loading
            }
        case setFollowingProgressType:
            return{
                ...state,
                followingProgress: action.following
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id=>id!=action.userId)

            }

        default: return state;
    }
}

export let setFollowing = (following, userId) => {
    return{type: setFollowingProgressType, following, userId}
}

export let followAccept = (id) => {
    return{type: followType, id: id}
}

export let unfollowAccept = (id) => {
    return{type: unfollowType, id: id}
}

export let setUsers = (users) => {
    return{type: newUsers, users: users}
}

export let setTotalCount = (totalCount) => {
    return{type:setTotalUsersCount ,totalCount}
}

export let setCurrentPage = (currentPage) => {
    return{type:setCurrentPageType, currentPage}
}

export let setLoading = (loading) => {
    return{type: setLoadingType, loading}
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(setFollowing(true, id));
        UsersApi.deleteFollow(id).then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollowAccept(id));
                dispatch(setFollowing(false, id));
            }
        })
    }
}

export const follow = (id) => {
    return (dispatch)=>{
        dispatch(setFollowing(true, id));
        UsersApi.postFollow(id).then(response=>{
            if(response.data.resultCode === 0){
                dispatch(followAccept(id))
                dispatch(setFollowing(false, id));
            }
        })
    }
}

export const getUser = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        UsersApi.getUsers(currentPage, pageSize).then(data =>
        {
            dispatch(setLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount/3));
        });
    }
}

export default UsersReducer;

