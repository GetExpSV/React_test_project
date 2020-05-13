import {UsersApi} from "../Api/UsersApi";
import {stopSubmit} from 'redux-form'

const setAuthUserType = 'SET-AUTH-USER';
const setIsAuthType = 'SET-AUTH';
const setUserImageType = 'SET-USER-IMAGE';
const setCaptchaType = 'SET-CAPTCHA';
const setIsCaptchaType = 'SET-IS-CAPTCHA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userImage: 'https://c7.hotpng.com/preview/406/211/692/5bd7bf9d2fae5.jpg',
    captcha: null,
    isCaptcha: false
}

export let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case setAuthUserType:
            return {
                ...state,
                ...action.data
            }
        case setIsAuthType:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case setUserImageType:
            return {
                ...state,
                userImage: action.image
            }
        case setCaptchaType:
            return{
                ...state,
                captcha: action.captcha
            }
        case setIsCaptchaType:
            return{
                ...state,
                isCaptcha: action.isCaptcha
            }
        default:
            return state;
    }
}

export const setAuthUser = (id, login, email) => {
    return {type: setAuthUserType, data: {id, login, email}}
}

export const setIsAuth = (isAuth) => {
    return {type: setIsAuthType, isAuth}
}

export const setImage = (image) => {
    return {type: setUserImageType, image}
}

const setCaptcha = (captcha) => {return{type: setCaptchaType, captcha}}
const setIsCaptcha = (isCaptcha) => {return{type: setIsCaptchaType, isCaptcha}}

export const auth = () => {
    return (dispatch) => {
        dispatch(setIsAuth(false));
        return UsersApi.userAuth().then(response => {
            if (response.data.resultCode === 0) {
                let user = response.data.data;
                dispatch(setAuthUser(user.id, user.login, user.email));
                dispatch(setIsAuth(true));
                UsersApi.userProfile(user.id).then(data => {
                    dispatch(setImage(data.photos.small));
                })
            }
        })
    }
}

/*export const postLogin = (data) => (dispatch) => {
    UsersApi.getCaptcha().then(response => {
        UsersApi.setLogin(data, response.data).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(auth())
            }
            else{
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    })
}*/

export const postLogin = (data) => (dispatch) => {
    debugger;
        UsersApi.setLogin(data).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(auth())
                dispatch(setIsCaptcha(false))
            }
            else if(response.data.resultCode === 10){
                UsersApi.getCaptcha().then(response => {
                dispatch(setCaptcha(response.data))
                dispatch(setIsCaptcha(true))
                })
            }
            else{
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }


export const Logout = () => (dispatch) =>{
    UsersApi.logOut().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setIsAuth(false))
            dispatch(setAuthUser(null, null, null))
        }
    })
}


