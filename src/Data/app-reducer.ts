import {auth} from "./Auth";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./Redux-store";
import { Action } from "redux";

const initializeType = 'INITIALIZE_TYPE';

let initialState = {
    initialized: false
};
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
            };
        default:
            return state;
    }
};


export let initializeApp = (): ThunkAction<void, RootState, unknown, appActionType> => (dispatch) =>{
    let promises = dispatch(auth());
    promises.then(()=>{
        dispatch(setInitialize())
    })
};