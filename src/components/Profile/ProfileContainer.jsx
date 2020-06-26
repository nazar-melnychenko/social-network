import React from "react";
import "./Profile.sass";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redax/profileReducer";


class ProfileContainer extends React.Component {

	componentDidMount() {
		// this.props.setFetching(true);

		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(respons => {
				this.props.setUserProfile(respons.data.items);
				// this.props.setFetching(false);
			});
	}

	render() {
		return <Profile {...this.props}/>;
	}
};

let mapStateToProps =(state) => ({});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);