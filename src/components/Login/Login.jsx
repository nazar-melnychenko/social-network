import React from "react"
import "./Login.sass"
import { reduxForm } from "redux-form"
import { createField, Input } from "../common/FormsControls/FormsControls"
import { email, required } from "../../utils/validators/validators"
import { authAPI } from "../../api/api";

let LoginForm = ({ handleSubmit, captcha, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField(Input, 'email', 'email', 'E-mail', [required, email])}
			{createField(Input, 'password', 'password', 'Password', [required])}
			<span>
				{createField(Input, 'rememberMe', 'checkbox', 'Password', null)}Remember me
			</span>
			{captcha &&
			<>
				<img src={captcha} alt="Captcha"/>
				{createField(Input, 'captcha', 'text', null, [required])}
			</>
			}
			{error && <div className="summaryError">{error}</div>}
			<button>Log in</button>
		</form>
	)
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ login, captcha }) => {

	const onSubmit = (formData) => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	 authAPI.signUp({Name: 'Shjkdiiihfk23', Email: 'aeftmmcd@10mail.org', Password: 'dfggdfgf', AcceptOffer: true})

	return (
		<>
			<div className="loginWrapper">
				<h1>Sign In</h1>
				<LoginForm onSubmit={onSubmit} captcha={captcha}/>
			</div>
		</>
	)
}

export default Login
