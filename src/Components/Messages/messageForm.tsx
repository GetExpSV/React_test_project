import React from 'react'
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLength, required} from "../../validates/validateField";
import {fieldComponent} from "../../FieldComponent/fieldComponent";

let maxLength300 = maxLength(300);
let component = fieldComponent('textarea');

export type messageForm = {
    message: string
}

let messageForm: React.FC<InjectedFormProps<messageForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={component} name={'message'} placeholder={'message here'} validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
};

const afterSubmit = (result: any, dispatch: any) =>
    dispatch(reset('message'));

let MessageReduxForm = reduxForm<messageForm>({form: 'message', onSubmitSuccess: afterSubmit})(messageForm);

export default MessageReduxForm