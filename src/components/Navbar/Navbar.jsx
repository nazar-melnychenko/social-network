import React from "react"
import "./Navbar.sass"
import {NavLink} from "react-router-dom"

const Navbar = (props) => {
	return (
		<nav className="nav">
			<div className="contentWrapper">
				<ul>
					<li><NavLink to="/profile">Profile</NavLink></li>
					<li><NavLink to="/dialogs">Messages</NavLink></li>
					<li><NavLink to="/news">News</NavLink></li>
					<li><NavLink to="/music">Music</NavLink></li>
					<li><NavLink to="/users">Users</NavLink></li>
					<li><NavLink to="/settings">Settings</NavLink></li>
				</ul>
				<div className="friends">
					<h2>Friends</h2>
					<div className="friends-items">
						{props.state.map(item => (
							<NavLink to={"/fiends/" + item.id} className="item" key={item.id}>
								<img src="https://ya-webdesign.com/transparent250_/android-contacts-icon-png-13.png" alt="Avatar"/>
								<span>{item.name}</span>
							</NavLink>
						))}
				</div>
			</div>
		</div>
</nav>
)

}

export default Navbar