import React from "react"
import "./Login.sass"
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import {email, required} from "../../utils/validators/validators"

let LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Input}
			       name="email"
			       type="email"
			       placeholder="E-mail"
			       validate={[required, email]}
			/>
			<Field component={Input}
			       name="password"
			       type="password"
			       placeholder="Password"
			       validate={[required]}
			/>
			<span><Field component="input" name="rememberMe" type="checkbox"/> Remember me</span>
			{props.captcha &&
			<>
				<img src={props.captcha} alt="Captcha"/>
				<Field component={Input}
				       name="captcha"
				       type="text"
				       validate={[required]}
				/>
			</>
			}
			{props.error && <div className="summaryError">{props.error}</div>}
			<button>Log in</button>
		</form>
	)
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	return (
		<>
			<div className="loginWrapper">
				<h1>Sign In</h1>
				<LoginForm onSubmit={onSubmit} captcha={props.captcha}/>
			</div>
		</>
	)
}

export default Login