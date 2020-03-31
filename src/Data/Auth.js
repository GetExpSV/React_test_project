const setAuthUserType = 'SET-AUTH-USER';
const setIsAuthType = 'SET-AUTH';
const setUserImageType = 'SET-USER-IMAGE';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    userImage: null
}

export let AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case setAuthUserType:
            return{
                ...state,
                ...action.data
            }
        case setIsAuthType:
            return{
                ...state,
                isAuth: action.isAuth
            }
        case setUserImageType:
            return{
                ...state,
                userImage: action.image
            }
        default: return state;
    }
}

export const setAuthUser = (id, login, email) => {
    return{type: setAuthUserType, data: {id, login, email}}
}

export const setIsAuth = (isAuth) => {
    return{type: setIsAuthType, isAuth}
}

export const setImage = (image) => {
    return{type: setUserImageType, image}
}

