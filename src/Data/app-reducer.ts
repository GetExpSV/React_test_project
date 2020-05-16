import {auth} from "./Auth";

const initializeType = 'INITIALIZE_TYPE'

let initialState = {
    initialized: false
}
type initialStateType = typeof initialState

type setInitializeActionType = {
    type: typeof initializeType
}
let setInitialize = (): setInitializeActionType => {return{type: initializeType}};

type appActionType = | setInitializeActionType

export let appReducer = (state = initialState, action: appActionType): initialStateType =>{
    switch(action.type)
    {
        case initializeType:
            return{
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}


export let initializeApp = () => (dispatch: any) =>{
    let promises = dispatch(auth());
    promises.then(()=>{
        dispatch(setInitialize())
    })
}