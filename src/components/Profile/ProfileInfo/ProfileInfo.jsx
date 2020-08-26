import React from "react"
import "./ProfileInfo.sass"
import avatar from "../../../assets/img/avatar.png"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = ({profile, status, updateStatusUser, isOwner}) => {
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
			<div className="description">
				<p>Про мене: "{profile.aboutMe}"</p>
				<p>Чи шукаю роботу: {profile.lookingForAJob ? 'Так' : 'Ні'}</p>
				{profile.lookingForAJob ? <p>Опис: {profile.lookingForAJobDescription}</p> : null}
				<ul>
					{profile.contacts.facebook ?
						<li><a href={props.profile.contacts.facebook}>Facebook</a></li> : null}
					{profile.contacts.website ? <li><a href={profile.contacts.website}>Веб сайт</a></li> : null}
					{profile.contacts.vk ? <li><a href={profile.contacts.vk}>Вконтакте</a></li> : null}
					{profile.contacts.twitter ? <li><a href={profile.contacts.twitter}>Twitter</a></li> : null}
					{profile.contacts.instagram ?
						<li><a href={profile.contacts.instagram}>Instagram</a></li> : null}
					{profile.contacts.youtube ? <li><a href={profile.contacts.youtube}>Youtube</a></li> : null}
					{profile.contacts.github ? <li><a href={profile.contacts.github}>Github</a></li> : null}
					{profile.contacts.mainLink ?
						<li><a href={profile.contacts.mainLink}>Головние посилання</a></li> : null}
				</ul>
			</div>
		</>
	)
}

export default ProfileInfo