import React from "react";
import "./App.sass";
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";


function App(props) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<HeaderContainer />
				<Navbar state={props.state.friends}/>
				<main className="content">
					<Route path="/profile/:userId?" component={ProfileContainer}/>
					<Route path="/dialogs" component={DialogsContainer}/>
					<Route path="/users" component={UsersContainer}/>
					<Route path="/login" component={Login}/>
					{/*<Route path="/profile"*/}
					{/*render={() => <Profile*/}
					{/*/>}/>*/}
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
