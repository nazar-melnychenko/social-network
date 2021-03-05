import { Input } from 'antd';
import React from 'react';

export const CustomInput = ({ label, value, onChange, name, type }) => {
	const { TextArea } = Input;
	return (
		<>
			{label && <><span>{label}</span><br/></>}
			{type === 'textarea'
				? <TextArea value={value} onChange={onChange} name={name} rows={4}/>
				: <Input type="text" value={value} onChange={onChange} name={name}/>
			}<br/><br/>
		</>
	)
}
