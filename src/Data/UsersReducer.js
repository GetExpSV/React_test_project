import React from 'react';

let followType = 'FOLLOW';
let unfollowType = 'UNFOLLOW';
let newUsers = 'ADD-USERS';
let setTotalUsersCount = 'SET-TOTAL-COUNT';
let setCurrentPageType = 'SET-CURRENT-PAGE';
let setLoadingType = 'SET-LOADING';

let initialUsers = {
    users: [],
    pageSize: 25,
    totalCount: 23,
    currentPage: 1,
    isLoading: false
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
                users: [...action.users]
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

        default: return state;
    }
}

export let follow = (id) => {
    return{type: followType, id: id}
}

export let unfollow = (id) => {
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

export default UsersReducer;

