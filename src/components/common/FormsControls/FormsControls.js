import React from "react"
import "./FormsControls.sass"
import {Field} from "redux-form";

const FormControl = ({input, children, meta:{touched, error}}) => {

	const hasError = touched && error

	return (
		<div className={hasError ? "formControl error" : "formControl"}>
			{children}
			<br/>
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	const {input, meta, ...restProps} = props
	return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
	const {input, meta, ...restProps} = props
	return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (component, name, type, placeholder, validate) => (
	<Field component={component}
	       name={name}
	       type={type}
	       placeholder={placeholder}
	       validate={validate}
	/>
)
