import React from "react"
import "./Header.sass"
import { NavLink } from "react-router-dom"

const Header = (props) => {
	return (
		<header className="header">
			<div className="loginBlock">
				{props.isAuth
					? <>
						{props.login}
						<span onClick={props.logout}>Log out</span>
					</>
					: <NavLink to={'/login'}>Login</NavLink>
				}
			</div>
		</header>
	)
}

export default Header
