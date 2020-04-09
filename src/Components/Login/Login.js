import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {postLogin} from "../../Data/Auth";
import {required} from "../../validates/validateField";
import {fieldComponent} from "../../FieldComponent/fieldComponent";
import loginClass from './login.module.css'

let component = fieldComponent("input")

let loginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={loginClass.item}>
            <div>
                <Field component={component} name="email" placeholder={"email"} validate={[required]}/>
            </div>
            <div>
                <Field component={component} name="password" placeholder={"Password"} validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={component}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(loginForm);

class Login extends React.Component {
    onSubmit = (formData) => {
        this.props.postLogin(formData)
        console.log(formData)
    }

    render() {
        return (
            <div>
                <div className={loginClass.item}>Login</div>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
    }
}

export default connect(mapStateToProps, {postLogin})(Login);