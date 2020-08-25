import React from 'react'
import "./Users.sass"
import avatar from "../../assets/img/avatar.png"
import {NavLink} from "react-router-dom"
import Preloader from "../common/Preloader/Preloader"


let Users = (props) => {

	let pages = Math.ceil(props.totalUsersCount / props.pageSize)
	let totalPages = []
	for (let i = 1; i <= pages; i++) {
		totalPages.push(i)
	}


	return (
		<>
			{props.isFetching
				? <Preloader/>
				: <div className="usersWrapper">
					<h2>Users</h2>
					<div className="usersWrapper_items">
						{props.users.map(item =>
							<div key={item.id} className="usersWrapper_items-item">
								<div className="imgFol">
									<NavLink to={'/profile/' + item.id}>
										<img src={item.photos.small != null ? item.photos.small : avatar} alt="Avatar"/>
									</NavLink>
									{item.followed
										? <button
											disabled={props.followingInProgress.some(id => id === item.id)}
											onClick={() => {
												props.onFollow(item.id)
											}}>Unfollow</button>
										: <button
											disabled={props.followingInProgress.some(id => id === item.id)}
											onClick={() => {
												props.onUnFollow(item.id)
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
							</div>)}
						<div className="usersWrapper_items-nav">
							{totalPages.map((p, i) =>
								<span onClick={() => {
									props.onSetCurrentPage(p)
								}} className={props.currentPage === p ? 'currentPage' : null} key={i}>{p}</span>
							)}
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default Users