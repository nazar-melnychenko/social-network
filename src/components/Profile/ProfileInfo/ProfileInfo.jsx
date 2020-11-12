import React from "react"
import "./ProfileInfo.sass"
import avatar from "../../../assets/img/avatar.png"
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = ({ profile, status, updateStatusUser, isOwner }) => {
	const { fullName, photos, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profile
	return (
		<>
			<div className="image">
				<img
					src="https://www.kuoni.co.uk/upload/inspiration/louise/which-caribbean-island/caribbean-island-header.jpg"
					alt=""
				/>
				<img src={photos.large || avatar} alt="Avatar" className="avatar"/>
			</div>
			<p>{fullName}</p><br/>
			<ProfileStatus
				status={status}
				updateStatusUser={updateStatusUser}
				isOwner={isOwner}
			/>
			<div className="description">
				{aboutMe && <p>About Me: {aboutMe}</p> }
				{lookingForAJob && <p>Looking For A Job?: {lookingForAJob ? 'Yes' : ''}</p>}
				{lookingForAJob && lookingForAJobDescription && <p>Job Description: {lookingForAJobDescription}</p>}
				<ul>
					{Object.keys(contacts).map((k, i) => (
						contacts[k] && <li key={i}><a href={contacts[k]} target="_blank" rel="noreferrer">{k}</a></li>: null
					))}
				</ul>
			</div>
		</>
	)
}

export default ProfileInfo
