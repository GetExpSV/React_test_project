import React from 'react'
import * as axios from "axios";

let instance = axios.create({withCredentials: true, headers: {'API-KEY': `386e7e8c-1969-48c0-aebc-06d99dc0c3c2`},
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