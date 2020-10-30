import React from "react";

const ProfileDataForm = ({ profile: { aboutMe, lookingForAJob, lookingForAJobDescription, contacts }, handleEditMode }) => {
	return (
		<form>
			{aboutMe ? <p>Про мене: {aboutMe}</p> : null}
			{lookingForAJob ? <p>Чи шукаю роботу: {lookingForAJob ? 'Так' : 'Ні'}</p> : null}
			{lookingForAJobDescription ? <p>Опис: {lookingForAJobDescription}</p> : null}
			<ul>
				{Object.keys(contacts).map((k, i) => (
					<li key={i}><a href={contacts[k]} target="_blank" rel="noreferrer">{k}</a></li>: null
				))}
			</ul>
			<button onClick={handleEditMode}>Зберегти</button>
			<br/><br/>
		</form>
	)
}

export default ProfileDataForm

