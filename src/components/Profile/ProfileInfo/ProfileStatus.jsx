import React, { useEffect, useState } from 'react'


const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deActivateEditMode = () => {
		setEditMode(false)
		props.updateStatusUser(status)
	}

	const handleStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<>
			{editMode && props.isOwner
				? <input autoFocus={true}
				         onBlur={deActivateEditMode}
				         onChange={handleStatusChange}
				         type="text"
				         value={status}
				/>

				: <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
			}
		</>
	)
}

export default ProfileStatus
