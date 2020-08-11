import React from "react";
import "./Dialogs.sass";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength50 = maxLength(50);

let DialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={Textarea}
			       name="dialogs"
			       placeholder="Enter your massage"
			       validate={[required, maxLength50]}
			/>
			<br/>
			<button>Add post</button>
		</form>
	);
};

DialogsForm = reduxForm({form: 'dialogs'})(DialogsForm);

const Dialogs = (props) => {

	const addNewMassage = (formData) => {
		props.addMassage(formData.dialogs);
		formData.dialogs = '';
	}

	return (
		<div className="dialogs">
			<div className="dialogs-items">
				{props.state.dialogs.map(item =>
					<NavLink className="item" to={'/dialogs/' + item.id} key={item.id}>
						<img src="https://ya-webdesign.com/transparent250_/android-contacts-icon-png-13.png" alt="img"/>
						<span>{item.name}</span>
					</NavLink>
				)}
			</div>
			<div className="dialogs-massages">
				{props.state.massages.map(item =>
					<div className="massage" key={item.id}>
						<img src="https://ya-webdesign.com/transparent250_/android-contacts-icon-png-13.png" alt="img"/>
						<span>{item.massage}</span>
					</div>
				)}
				<DialogsForm onSubmit={addNewMassage}/>
			</div>
		</div>
	);
};

export default Dialogs;