import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {fieldComponent} from "../../../../../FieldComponent/fieldComponent";
import {contactsType, ProfileInfoType} from "../../../../../Data/ProfileReducer";
import {PropsForInitial} from "../PersonInfo";

let componentForInput = fieldComponent("input");
let componentForTextarea = fieldComponent("textarea");

type formProps = {
    contacts: Array<contactsType>
}

let PersonInfoFormRedux: React.FC<InjectedFormProps<PropsForInitial, formProps> & formProps> = (props) =>{
    return(<form onSubmit={props.handleSubmit}>
        <div>Name:
            <Field component={componentForInput} name={"fullName"} placeholder={"Full name"}/>
        </div>
        <div>Find a job:
            <Field component={componentForInput} type={"checkbox"} name={"lookingForAJob"}/>
        </div>
        <div>Skills:
            <Field component={componentForTextarea} type={"textarea"} name={"lookingForAJobDescription"} placeholder={"Skills"}/>
        </div>
        <div>About me:
            <Field component={componentForTextarea} type={"textarea"} name={"aboutMe"} placeholder={"About me"}/>
        </div>
        {Object.keys(props.contacts).map(key=>{
            return (<div>{key}
                <Field component={componentForInput} type={"textarea"} name={`contacts.${key}`} key={key} placeholder={`${key}`}/>
            </div>)
        })}
        {props.error && <div>{props.error}</div>}
        <button>Save</button>
    </form>);
};

let PersonInfoForm = reduxForm<PropsForInitial, formProps>({form: 'PersonInfo'})(PersonInfoFormRedux);

export default PersonInfoForm;