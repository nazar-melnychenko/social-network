import React from 'react'
import "./User.sass"
import avatar from "../../assets/img/avatar.png"
import { NavLink } from "react-router-dom"


let User = ({ item, followingInProgress, onFollow, onUnFollow }) => {
	return (
		<div className="userWrapper">
			<div className="imgFol">
				<NavLink to={'/profile/' + item.id}>
					<img src={item.photos.small != null ? item.photos.small : avatar} alt="Avatar"/>
				</NavLink>
				{item.followed
					? <button
						disabled={followingInProgress.some(id => id === item.id)}
						onClick={() => {
							onFollow(item.id)
						}}>Unfollow</button>
					: <button
						disabled={followingInProgress.some(id => id === item.id)}
						onClick={() => {
							onUnFollow(item.id)
						}}>Follow</button>
				}
			</div>
			<div className="blockInfo">
				<div className="nameStat">
					<div className="name">{item.name}</div>
					<div className="status">{item.status}</div>
				</div>
				<div className="location">...<br/>...</div>
			</div>
		</div>
	)
}
export default User
