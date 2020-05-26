import React from 'react';
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLength, required} from "../../../validates/validateField";
import {fieldComponent} from "../../../FieldComponent/fieldComponent";

let maxLength300 = maxLength(300);
let component = fieldComponent("textarea");

export type formProps = {
    text: string
}

let postForm: React.FC<InjectedFormProps<formProps>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={component} name={"text"} placeholder={"Post here"} validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

let afterSubmit = (result: any, dispatch: any) =>{
    dispatch(reset('post'))
};

let PostReduxForm = reduxForm<formProps>({form: 'post', onSubmitSuccess: afterSubmit})(postForm);

export default PostReduxForm;