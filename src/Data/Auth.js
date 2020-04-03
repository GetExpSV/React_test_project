import {UsersApi} from "../Api/UsersApi";

const setAuthUserType = 'SET-AUTH-USER';
const setIsAuthType = 'SET-AUTH';
const setUserImageType = 'SET-USER-IMAGE';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userImage: 'https://c7.hotpng.com/preview/406/211/692/5bd7bf9d2fae5.jpg'
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

export const auth = () => {
    return (dispatch) => {
        dispatch(setIsAuth(false));
        UsersApi.userAuth().then(response => {
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


