import {UsersApi} from "../Api/UsersApi";
import {stopSubmit} from 'redux-form'
import {ThunkAction} from "redux-thunk";
import {RootState} from "./Redux-store";
import {Action} from "redux";

const setAuthUserType = 'SET-AUTH-USER';
const setIsAuthType = 'SET-AUTH';
const setUserImageType = 'SET-USER-IMAGE';
const setCaptchaType = 'SET-CAPTCHA';
const setIsCaptchaType = 'SET-IS-CAPTCHA';


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    userImage: 'https://c7.hotpng.com/preview/406/211/692/5bd7bf9d2fae5.jpg' as string | null,
    captcha: null as string | null,
    isCaptcha: false
};

type authStateType = typeof initialState


type setAuthUserDataType = {
    id: number | null,
    login: string | null,
    email: string | null
}
type setAuthUserActionType = {
    type: typeof setAuthUserType,
    data: setAuthUserDataType
}
export const setAuthUser = (id: number | null, login: string | null, email: string | null): setAuthUserActionType => {
    return {type: setAuthUserType, data: {id, login, email}}
};

type setIsAuthActionType = {
    type: typeof setIsAuthType,
    isAuth: boolean
}
export const setIsAuth = (isAuth: boolean): setIsAuthActionType => {
    return {type: setIsAuthType, isAuth}
};

type setImageActionType = {
    type: typeof setUserImageType,
    image: string | null
}
export const setImage = (image: string | null): setImageActionType => {
    return {type: setUserImageType, image}
};

type setCaptchaActionType = {
    type: typeof setCaptchaType,
    captcha: string
}
const setCaptcha = (captcha: string): setCaptchaActionType => {
    return {type: setCaptchaType, captcha}
};

type setIsCaptchaActionType = {
    type: typeof setIsCaptchaType,
    isCaptcha: boolean
}
const setIsCaptcha = (isCaptcha: boolean): setIsCaptchaActionType => {
    return {type: setIsCaptchaType, isCaptcha}
};

type authAction =
    | setAuthUserActionType
    | setIsAuthActionType
    | setImageActionType
    | setCaptchaActionType
    | setIsCaptchaActionType

export let AuthReducer = (state = initialState, action: authAction): authStateType => {
    switch (action.type) {
        case setAuthUserType:
            return {
                ...state,
                ...action.data
            };
        case setIsAuthType:
            return {
                ...state,
                isAuth: action.isAuth
            };
        case setUserImageType:
            return {
                ...state,
                userImage: action.image
            };
        case setCaptchaType:
            return {
                ...state,
                captcha: action.captcha
            };
        case setIsCaptchaType:
            return {
                ...state,
                isCaptcha: action.isCaptcha
            };
        default:
            return state;
    }
};

export const auth = (): ThunkAction<any, RootState, unknown, authAction> => async dispatch => {
    dispatch(setIsAuth(false));
    let response = await UsersApi.userAuth();
    if (response.data.resultCode === 0) {
        let user = response.data.data;
        dispatch(setAuthUser(user.id, user.login, user.email));
        dispatch(setIsAuth(true));
        let data = await UsersApi.userProfile(user.id);
        dispatch(setImage(data.photos.small));
    }
    return response;
};

export type loginType = {
    email: string
    password: string
    rememberMe: boolean | null
    captcha: string | null
}

export const postLogin = (data: loginType): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
    let response = await UsersApi.setLogin(data);
    if (response.data.resultCode === 0) {
        dispatch(auth());
        dispatch(setIsCaptcha(false))
    } else if (response.data.resultCode === 10) {
        let response = await UsersApi.getCaptcha();
        dispatch(setCaptcha(response.data));
        dispatch(setIsCaptcha(true))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', {_error: message}))
    }

};


export const Logout = (): ThunkAction<void, RootState, unknown, authAction> => async (dispatch) => {
    let response = await UsersApi.logOut();
    if (response.data.resultCode === 0) {
        dispatch(setIsAuth(false));
        dispatch(setAuthUser(null, null, null))
    }
};



