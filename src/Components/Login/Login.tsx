import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect, ConnectedProps} from "react-redux";
import {postLogin, loginType} from "../../Data/Auth";
import {required} from "../../validates/validateField";
import {fieldComponent} from "../../FieldComponent/fieldComponent";
import loginClass from './login.module.css'
import {Redirect} from "react-router-dom";
import { RootState } from '../../Data/Redux-store';

let component = fieldComponent("input");
type PropsType = {
    captcha: any
    isCaptcha: boolean | null
}

class loginForm extends React.Component<InjectedFormProps<loginType, PropsType> & PropsType> {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className={loginClass.item}>
                <div>
                    <Field component={component} name="email" placeholder={"email"} validate={[required]}/>
                </div>
                <div>
                    <Field component={component} name="password" placeholder={"Password"} validate={[required]}/>
                </div>
                <div>
                    <Field type="checkbox" name="rememberMe" component={component}/> remember me
                </div>
                {this.props.isCaptcha && <div><img src={this.props.captcha.url} alt={"captcha img"}/>
                    <Field component={component} name="captcha" validate={[required]}/>
                </div>}

                {this.props.error && <div className={loginClass.someError}>{this.props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }
}

const LoginReduxForm = reduxForm<loginType, PropsType>({form: 'login'})(loginForm);

let Login: React.FC<Props> = (props) => {
    let onSubmit = (formData: loginType) => {
        props.postLogin(formData)
    };

    if (props.isAuth === true) return <Redirect to={'/profile'}/>;

    return (
        <div>
            <div className={loginClass.item}>Login</div>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} isCaptcha={props.isCaptcha}/>
        </div>
    )
};

let mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        isCaptcha: state.auth.isCaptcha,
        captcha: state.auth.captcha
    }
};
let connector = connect(mapStateToProps, {postLogin});
type Props = ConnectedProps<typeof connector>

export default connector(Login)
