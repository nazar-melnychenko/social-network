import React from "react"
import Login from "./Login"
import {connect} from "react-redux"
import {login} from "../../redux/authReducer"
import {Redirect} from "react-router-dom"


class LoginContainer extends React.Component {
	render() {
		return (
			<>
				{this.props.isAuth
					? <Redirect to="/profile"/>
					: <Login login={this.props.login} captcha={this.props.captcha}/>
				}
			</>
		)
	}
}

const mapDispatchToProps = (state) => ({
	isAuth: state.auth.isAuth,
	captcha: state.auth.captcha,
})

export default connect(mapDispatchToProps, {login})(LoginContainer)
