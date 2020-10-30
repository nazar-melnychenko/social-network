import React from "react";

const ProfileData = ({ profile: { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts }, isOwner, handleEditMode }) => {
	return (
		<>
			<div className="description">
				{aboutMe ? <p>Про мене: {aboutMe}</p> : null}
				{lookingForAJob ? <p>Чи шукаю роботу: {lookingForAJob ? 'Так' : 'Ні'}</p> : null}
				{lookingForAJobDescription ? <p>Опис: {lookingForAJobDescription}</p> : null}
				<ul>
					{Object.keys(contacts).map((k, i) => (
						contacts[k] && <li key={i}><a href={contacts[k]} target="_blank" rel="noreferrer">{k}</a></li>: null
					))}
				</ul>
			</div>
			{isOwner && <button onClick={handleEditMode}>Редагувати контакти</button>}
			<br/><br/>
		</>
	)
}

export default ProfileData

