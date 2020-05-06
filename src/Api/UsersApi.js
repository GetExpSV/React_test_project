import React from 'react'
import * as axios from "axios";

let instance = axios.create({withCredentials: true, headers: {'API-KEY': `1c95c5ae-ac6c-4a60-89b0-57e5d518e6bc`},
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
    },
    getStatus(userId){
        return instance.get('profile/status/' + userId)
    },
    setStatus(text){
        return instance.put('profile/status/', {status: text})
    },
    setLogin(authData, captcha){
        return instance.post(`auth/login?email=${authData.email}&password=${authData.password}&rememberMe=${authData.rememberMe || 'false'}`, {captcha})
    },
    getCaptcha(){
        return instance.get('security/get-captcha-url')
    },
    logOut(){
        return instance.delete('auth/login')
    }
}