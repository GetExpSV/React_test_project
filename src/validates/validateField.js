import React from 'react';

export const required = (value) => {
    if(value) return undefined;
    return "must required";
}

export const maxLength = (maxLength) => (value)=>{
    if(value.length > maxLength) return `max length ${maxLength} symbols`
    return undefined
}