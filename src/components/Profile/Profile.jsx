import React from "react";
import "./Profile.sass";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className="profile">
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;