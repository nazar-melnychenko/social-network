import React from "react";
import "./Dialogs.sass";
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

	const newTextMassage = React.createRef();

	const onUpdateMassage = () => {
		props.hendleUpdateMassage(newTextMassage.current.value);
	};

	const onAddMassage = () => {
		props.hendleAddMassage();
	};

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
						<textarea ref={newTextMassage}
						          onChange={onUpdateMassage}
						          value={props.state.tempMassage}
						/><br/>
						<button onClick={onAddMassage}>Add post</button>
					</div>
				</div>
	);
};

export default Dialogs;