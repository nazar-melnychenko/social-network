import React from "react";
import logo from "../../assets/logo.png";
import "./Header.sass";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className="header">
			<img src={logo} alt="logo"/>
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
	);
};

export default Header;