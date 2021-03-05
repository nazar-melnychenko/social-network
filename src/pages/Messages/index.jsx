import React, { useEffect } from 'react'
import './style.sass'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDialogs, getUserMassages } from '../../redux/messages/actionCreators';

const Messages = () => {
	const dialogs = useSelector(({messages}) => messages.dialogs)
	const massages = useSelector(({messages}) => messages.massages)
	const dispatch = useDispatch()

	useEffect( async () => {
		await dispatch(getAllDialogs())
	}, [])

	const handleClick = (id) => {
		dispatch(getUserMassages(id))
	}
	// const addNewMassage = (formData) => {
	// 	props.addMassage(formData.dialogs)
	// 	formData.dialogs = ''
	// }

	return (
		<div className="dialogs">
			<div className="dialogs-items">
				{dialogs.map(item =>
					<NavLink onClick={() => handleClick(item.id)} className="item" to={'/dialogs/' + item.id} key={item.id}>
						<img src={item.photos.large? item.photos.large : "https://ya-webdesign.com/transparent250_/android-contacts-icon-png-13.png"} alt="img"/>
						<span>{item.userName}</span>
					</NavLink>
				)}
			</div>
			<div className="dialogs-massages">
				{massages.items && massages.items.map(item =>
					<div className="massage" key={item.id}>
						<span>{item.body}</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default Messages
