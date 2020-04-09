import React from 'react';
import fieldComponentClass from './fieldComponent.module.css'

export const fieldComponent = (ComponentElement) => ({input, meta, ...props}) => {
    let error = meta.touched && meta.error
    return (
        <div className={fieldComponentClass.item}>
            <div>
                <ComponentElement
                    className={error ? fieldComponentClass.elementError : ""} {...input} {...meta} {...props}/>
            </div>
                {error ? <div className={fieldComponentClass.error}>{meta.error}</div> : ""}
        </div>

    )
}