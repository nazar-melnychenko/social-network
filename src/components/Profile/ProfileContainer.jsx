import React from "react";
import "./Profile.sass";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getProfileUser, getStatusUser, updateStatusUser} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";


class ProfileContainer extends React.Component {


	componentDidMount() {
		let queryId = this.props.match.params.userId || this.props.userId;
		this.props.getProfileUser(queryId);
		this.props.getStatusUser(queryId)
	}

	componentWillUnmount() {
		this.props.setUserProfile(null);
	}

	render() {
		return <>
			{!this.props.profile
				? <Preloader/>
				: <Profile profile={this.props.profile}
				           status={this.props.status}
				           updateStatusUser={this.props.updateStatusUser}
				/>
			}
		</>
	}
};

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	userId: state.auth.id,
});


export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {setUserProfile, getProfileUser, getStatusUser, updateStatusUser})
)(ProfileContainer);