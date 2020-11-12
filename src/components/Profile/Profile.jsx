import React from "react"
import "./Profile.sass"
import MyPostsContainer from "./MyPost/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
	return (
		<div className="profile">
			<ProfileInfo profile={props.profile}
			             status={props.status}
			             updateStatusUser={props.updateStatusUser}
			             isOwner={props.isOwner}
			/>
			<hr/>
			<MyPostsContainer isOwner={props.isOwner}/>
		</div>
	)
}

export default Profile
