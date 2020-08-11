import React from "react";
import "./FormsControls.sass";

const FormControl = ({input, meta, ...props}) => {

	const hasError = meta.touched && meta.error;

	return (
		<div className={hasError ? "formControl error" : "formControl"}>
			{props.children}
			<br/>
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

export const Textarea = (props) => {
	const {input, meta, ...restProps} = props;
	return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
	const {input, meta, ...restProps} = props;
	return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

