import React from 'react'
import {Field, reduxForm} from "redux-form";
import {fieldComponent} from "../../../../../FieldComponent/fieldComponent";

let componentForInput = fieldComponent("input");
let componentForTextarea = fieldComponent("textarea");

let PersonInfoFormRedux = (props) =>{
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
}

let PersonInfoForm = reduxForm({form: 'PersonInfo'})(PersonInfoFormRedux)

export default PersonInfoForm;