import React, { useState } from "react"
import "./ProfileInfo.sass"
import avatar from "../../../assets/img/avatar.png"
import ProfileStatus from "./ProfileStatus"
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatusUser, isOwner }) => {

	const [editMode, setEditMode] = useState(false)


	return (
		<>
			<div className="image">
				<img
					src="https://www.kuoni.co.uk/upload/inspiration/louise/which-caribbean-island/caribbean-island-header.jpg"
					alt=""
				/>
				<img src={profile.photos.large || avatar} alt="Avatar" className="avatar"/>
			</div>
			<p>{profile.fullName}</p><br/>
			<ProfileStatus
				status={status}
				updateStatusUser={updateStatusUser}
				isOwner={isOwner}
			/>
			{editMode
				? <ProfileDataForm profile={profile} handleEditMode={() => setEditMode(false)}/>
				: <ProfileData profile={profile} isOwner={isOwner} handleEditMode={() => setEditMode(true)}/>
			}
		</>
	)
}

export default ProfileInfo
