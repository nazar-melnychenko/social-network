import React from 'react'
import './Login.sass'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { email, required } from '../../utils/validators/validators'
import { Tabs } from 'antd';

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

	const { TabPane } = Tabs;

	const onSubmit = (formData) => {
		login(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}

	return (
		<Tabs centered animated>
			<TabPane tab="Sign In" key="1">
				<div className="loginWrapper">
					<LoginForm onSubmit={onSubmit} captcha={captcha}/>
				</div>
			</TabPane>
			<TabPane tab="Forget password" key="2">
				<div className="loginWrapper">
					Coming soon ...
				</div>
			</TabPane>
		</Tabs>

	)
}

export default Login
