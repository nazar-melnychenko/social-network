import React from "react"
import "./App.sass"
import {Route} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer"
import Navbar from "./components/Navbar/Navbar"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import LoginContainer from "./components/Login/LoginContainer"
import {connect} from "react-redux"
import {initializeApp} from "./redux/appReducer"
import Preloader from "./components/common/Preloader/Preloader"


class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp()
	}


	render() {
		return (
			<>
				{this.props.initialized
					? <div className="wrapper">
						<HeaderContainer/>
						<Navbar state={this.props.state.friends}/>
						<main className="content">
							<Route path="/profile/:userId?" component={ProfileContainer}/>
							<Route path="/dialogs" component={DialogsContainer}/>
							<Route path="/users" component={UsersContainer}/>
							<Route path="/login" component={LoginContainer}/>
							{/*<Route path="/profile"*/}
							{/*render={() => <Profile*/}
							{/*/>}/>*/}
						</main>
					</div>
					: <Preloader />
				}
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)
