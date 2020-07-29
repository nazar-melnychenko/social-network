import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
	isAuth: state.auth.isAuth
});


export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			return (
				<>
					{this.props.isAuth
						? <Component {...this.props}/>
						: <Redirect to="/login"/>
					}
				</>
			);
		}
	}

	let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


	return ConnectedRedirectComponent;
};