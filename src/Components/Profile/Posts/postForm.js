import React from 'react';
import {Field, reduxForm, reset} from "redux-form";
import {maxLength, required} from "../../../validates/validateField";
import {fieldComponent} from "../../../FieldComponent/fieldComponent";

let maxLength300 = maxLength(300);
let component = fieldComponent("textarea")

let postForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
            <div>
                <Field component={component} name={"text"} placeholder={"Post here"} validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let afterSubmit = (result, dispatch) =>{
    dispatch(reset('post'))
}

let PostReduxForm = reduxForm({form: 'post', onSubmitSuccess: afterSubmit})(postForm)

export default PostReduxForm;