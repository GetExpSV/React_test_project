import React from 'react'
import {auth} from "./Auth";

const initializeType = 'INITIALIZE_TYPE'

let initialState = {
    initialized: false
}

export let appReducer = (state = initialState, action) =>{
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

let setInitialize = () => {return{type: initializeType}};


export let initializeApp = () => (dispatch) =>{
    let promises = dispatch(auth());
    promises.then(()=>{
        dispatch(setInitialize())
    })
}