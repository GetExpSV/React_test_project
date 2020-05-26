type validates = (value: string) => string | undefined

export const required: validates = (value) => {
    if(value) return undefined;
    return "must required";
}

export const maxLength = (maxLength: number): validates => (value)=>{
    if(value.length > maxLength) return `max length ${maxLength} symbols`
    return undefined
}