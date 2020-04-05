import React from 'react'
import * as axios from "axios";

let instance = axios.create({withCredentials: true, headers: {'API-KEY': `c7ddb94c-998a-4404-929e-3627552358cd`},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'})

export const UsersApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>
        {
            return response.data
        });
    },
    deleteFollow(id){
        return instance.delete(`follow/${id}`)
    },
    postFollow(id){
        return instance.post(`follow/${id}`)
    },
    userAuth(){
        return instance.get('auth/me')
    },
    userProfile(userId){
        return instance.get('profile/' + userId).then(response=>{return response.data})
    }
}