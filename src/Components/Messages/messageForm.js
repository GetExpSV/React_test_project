import React from 'react'
import {Field, reduxForm, reset} from "redux-form";
import {maxLength, required} from "../../validates/validateField";
import {fieldComponent} from "../../FieldComponent/fieldComponent";

let maxLength300 = maxLength(300);
let component = fieldComponent('textarea')

let messageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
            <div>
                <Field component={component} name={'message'} placeholder={'message here'} validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('message'));

let MessageReduxForm = reduxForm({form: 'message', onSubmitSuccess: afterSubmit})(messageForm)

export default MessageReduxForm