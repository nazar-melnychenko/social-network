import React, { useEffect } from 'react'
import './CreateAccount.sass'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { email, required } from '../../utils/validators/validators'
import { Result, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount, createAccountFinished } from '../../redux/createAccount/actionCreators';
import { Link } from 'react-router-dom';
import { auth } from '../../redux/authReducer';

let CreateAccountForm = ({ handleSubmit, error, spinning }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Spin spinning={spinning} size="large" delay={500}>
				{createField(Input, 'name', 'text', 'Your Login', [required])}
				{createField(Input, 'email', 'email', 'Your Email', [required, email])}
				{createField(Input, 'password', 'password', 'Your Password', [required])}
				<span>
					{createField(Input, 'acceptOffer', 'checkbox', null, [required])}I accept terms
				</span>
				{error && <div className="summaryError">{error}</div>}
				<button>Create New Account</button>
			</Spin>
		</form>
	)
}

CreateAccountForm = reduxForm({ form: 'createAccountForm' })(CreateAccountForm)

const CreateAccount = () => {
	const isLoading = useSelector(({ createAccount }) => createAccount.isLoading)
	const isCreated = useSelector(({ createAccount }) => createAccount.isCreated)
	const dispatch = useDispatch()

	useEffect(() => {
		return () => dispatch(createAccountFinished())
	}, [])

	const handleSubmit = (formData) => {
		dispatch(createAccount(formData))
	}

	const handleClick = () => {
		dispatch(auth())
	}

	return (
		<>
			{isCreated
				? <Result
					status="success"
					title="Account created. Please verify your email and press on Home button"
					extra={<Link onClick={handleClick} to="/profile" type="primary">Home</Link>}
				/>
				: <div className="createAccountWrapper">
						<CreateAccountForm onSubmit={handleSubmit} spinning={isLoading}/>
					</div>
			}
		</>
	)
}

export default CreateAccount
