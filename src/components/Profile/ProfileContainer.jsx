import React from "react";
import "./Profile.sass";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setUserProfile, getProfileUser} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId || 9284;
		this.props.getProfileUser(userId);
	}

	componentWillUnmount() {
		this.props.setUserProfile(null);
	}

	render() {
		return <Profile profile={this.props.profile}/>
	}
};


let mapStateToProps =(state) => ({
	profile: state.profilePage.profile,
});

const ProfileContainerRedirect = withAuthRedirect(ProfileContainer)

let WithUrlData = withRouter(ProfileContainerRedirect);

export default connect(mapStateToProps, {setUserProfile,getProfileUser})(WithUrlData);