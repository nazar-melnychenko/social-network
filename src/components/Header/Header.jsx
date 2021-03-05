import React from 'react'
import './Header.sass'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
	return (
		<header className="header">
			<div className="loginBlock">
				{props.isAuth
					? <>
						<span className="loginBlock-loginName">{props.loginName}</span>
						<span className="loginBlock-logOut" onClick={props.logout}>Log out</span>
					</>
					: <>
						<NavLink activeClassName="loginBlock-activeStyle" to={'/login'}>Login</NavLink>
						<span className="loginBlock-separator">/</span>
						<NavLink activeClassName="loginBlock-activeStyle" to={'/createAccount'}>Create account</NavLink>
					</>
				}
			</div>
		</header>
	)
}

export default Header
