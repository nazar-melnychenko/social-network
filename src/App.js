import React from "react";
import "./App.sass";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header/>
				<Navbar state={props.state.friends}/>
				<main className="content">
					<Route path="/profile/:userId" component={ProfileContainer}/>
					<Route path="/dialogs" component={DialogsContainer}/>
					<Route path="/users" component={UsersContainer}/>
					{/*<Route path="/profile"*/}
					{/*render={() => <Profile*/}
					{/*/>}/>*/}
					{/*<Route path="/dialogs"*/}
					{/*render={() => <DialogsContainer*/}
					{/*/>}/>*/}
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
