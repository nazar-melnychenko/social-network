import React from 'react'
import './Users.sass'
import User from './User';


let Users = ({ users, followingInProgress, onFollow, onUnFollow }) => {
	return (
		<div className="usersWrapper">
			<h2>Users</h2>
			<div className="usersWrapper_items">
				{users.map(item => <User
					key={item.id}
					item={item}
					followingInProgress={followingInProgress}
					onFollow={onFollow}
					onUnFollow={onUnFollow}
				/>)}
			</div>
		</div>
	)
}

export default Users
