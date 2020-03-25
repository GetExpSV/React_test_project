import React from 'react';

let followType = 'FOLLOW';
let unfollowType = 'UNFOLLOW';

let initialUsers = {
    users: [{id: 1, photoUrl: 'https://c7.hotpng.com/preview/406/211/692/5bd7bf9d2fae5.jpg', follow: true, fullName: 'Vladislav', status: "Hi everyone", location: {country: 'Ukrain', city: 'Kiev'}},
        {id: 2, photoUrl: 'https://sun9-57.userapi.com/c846122/v846122563/747dd/1B2WtilFklE.jpg?ava=1', follow: false, fullName: 'Sam', status: "Hi everyone more", location: {country: 'Russia', city: 'Moscow'}}]
}

let UsersReducer = (state = initialUsers, action) => {
    switch(action.type){
        case followType:
            return{
                ...state,
                users: state.users.map(data=> {
                    if(data.id === action.id){
                        return{...data, follow: true};
                    }
                    return data;
                })
            }
        case unfollowType:
            return{
                ...state,
                users: state.users.map(data=>{
                    if(data.id === action.id){
                        return{...data, follow: false}
                    }
                    return data;
                })
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

export default UsersReducer;

