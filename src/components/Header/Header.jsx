import React from "react";
import logo from "./logo.svg";
import "./Header.sass";

const Header = () => {
	return (
		<header className="header">
			<img src={logo} alt="logo"/>
		</header>
	);
};

export default Header;