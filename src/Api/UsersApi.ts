import axios from "axios";
import { PropsForInitial } from "../Components/Profile/ProfileInfo/PersonInfo/PersonInfo";
import { loginType } from "../Data/Auth";
import {usersType} from "../Data/UsersReducer";
import { ProfileInfoType } from "../Data/ProfileReducer";

let instance = axios.create({withCredentials: true, headers: {'API-KEY': `128cc41f-1afc-4c12-ade4-fb82771536ed`},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'})

type getUsers = {
    items: Array<usersType>,
    totalCount: number,
    error: string
}
type putProfile = {
    resultCode: number
    messages: Array<string>,
}

type setLogin = {
    resultCode: number
    messages: Array<string>,
    data: {
        userId: number
    }
}

export const UsersApi = {
    getUsers(currentPage: number | null = 1, pageSize: number | null = 10){
        return instance.get<getUsers>(`users?page=${currentPage}&count=${pageSize}`).then(response =>
        {
            return response.data
        });
    },
    deleteFollow(id: number){
        return instance.delete(`follow/${id}`)
    },
    postFollow(id: number | null){
        return instance.post(`follow/${id}`)
    },
    userAuth(){
        return instance.get('auth/me')
    },
    userProfile(userId: number | null){
        return instance.get<ProfileInfoType>('profile/' + userId).then(response=>{return response.data})
    },
    getStatus(userId: number){
        return instance.get<string>('profile/status/' + userId)
    },
    setStatus(text: string){
        return instance.put('profile/status/', {status: text})
    },
    setLogin(authData: loginType){
        return instance.post<setLogin>(`auth/login?email=${authData.email}&password=${authData.password}&rememberMe=${authData.rememberMe || 'false'}`,
            {captcha: authData.captcha})
    },
    getCaptcha(){
        return instance.get<string>('security/get-captcha-url')
    },
    logOut(){
        return instance.delete('auth/login')
    },
    putProfileInfo(profile: PropsForInitial){
        return instance.put<putProfile>('profile/', profile)
    },
    putPhoto(image: File){
        const formData = new FormData();
        formData.append("image", image);
        debugger;
        return instance.put('profile/photo', formData, {headers:{'Content-Type': 'multipart/form-data'}})
    }
}