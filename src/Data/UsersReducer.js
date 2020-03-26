import React from 'react';

let followType = 'FOLLOW';
let unfollowType = 'UNFOLLOW';
let newUsers = 'ADD-USERS'

let initialUsers = {
    users: []
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

export default UsersReducer;

