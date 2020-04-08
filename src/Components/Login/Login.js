import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {postLogin} from "../../Data/ProfileReducer";

let loginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="email" placeholder="email"/>
            </div>
            <div>
                <Field component="input" name="password" placeholder="Password"/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/> remember me
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
                <div>Login</div>
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