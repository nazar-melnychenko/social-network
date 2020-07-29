import React from "react";
import "./ProfileInfo.sass";
import avatar from "../../../assets/img/avatar.png";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
	return (
		<>
			{!props.profile
				? <Preloader />
				: <>
						<div className="image">
							<img
								src="https://www.kuoni.co.uk/upload/inspiration/louise/which-caribbean-island/caribbean-island-header.jpg"
								alt=""/>
							<img src={props.profile.photos.large != null ? props.profile.photos.large : avatar} alt="Avatar" className="avatar"/>
						</div>
						<p>{props.profile.fullName}</p>
						<div className="description">
							<p>Про мене: "{props.profile.aboutMe}"</p>
							<p>Чи шукаю роботу: {props.profile.lookingForAJob ? 'Так' : 'Ні'}</p>
							{props.profile.lookingForAJob ? <p>Опис: {props.profile.lookingForAJobDescription}</p> : null}
							<ul>
								{props.profile.contacts.facebook ? <li><a href={props.profile.contacts.facebook}>Facebook</a></li> : null}
								{props.profile.contacts.website ? <li><a href={props.profile.contacts.website}>Веб сайт</a></li> : null}
								{props.profile.contacts.vk ? <li><a href={props.profile.contacts.vk}>Вконтакте</a></li> : null}
								{props.profile.contacts.twitter ? <li><a href={props.profile.contacts.twitter}>Twitter</a></li> : null}
								{props.profile.contacts.instagram ? <li><a href={props.profile.contacts.instagram}>Instagram</a></li> : null}
								{props.profile.contacts.youtube ? <li><a href={props.profile.contacts.youtube}>Youtube</a></li> : null}
								{props.profile.contacts.github ? <li><a href={props.profile.contacts.github}>Github</a></li> : null}
								{props.profile.contacts.mainLink ? <li><a href={props.profile.contacts.mainLink}>Головние посилання</a></li>: null}
							</ul>
						</div>
				</>
			}
		</>
	);
};

export default ProfileInfo;