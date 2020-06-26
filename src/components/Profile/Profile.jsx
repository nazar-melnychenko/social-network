import React from "react";
import "./Profile.sass";
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className="profile">
			<ProfileInfo/>
			<MyPostsContainer/>
		</div>
	);
};

export default Profile;