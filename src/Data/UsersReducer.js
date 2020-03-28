import React from 'react';

let followType = 'FOLLOW';
let unfollowType = 'UNFOLLOW';
let newUsers = 'ADD-USERS';
let setTotalCount = 'SET-TOTAL-COUNT';
let setCurrentPage = 'SET-CURRENT-PAGE';
let setLoading = 'SET-LOADING';

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
        case setTotalCount:
            return{
                ...state,
                totalCount: action.totalCount
            }
        case setCurrentPage:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case setLoading:
            return{
                ...state,
                isLoading: action.loading
            }

        default: return state;
    }
}

export let followAC = (id) => {
    return{type: followType, id: id}
}

export let unfollowAC = (id) => {
    return{type: unfollowType, id: id}
}

export let setUsers = (users) => {
    return{type: newUsers, users: users}
}

export let setTotalCountAc = (totalCount) => {
    return{type:setTotalCount ,totalCount}
}

export let setCurrentPageAc = (currentPage) => {
    return{type:setCurrentPage, currentPage}
}

export let setLoadingAc = (loading) => {
    return{type: setLoading, loading}
}

export default UsersReducer;

