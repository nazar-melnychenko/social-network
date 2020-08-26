import React from "react"
import "./Profile.sass"
import Profile from "./Profile"
import {connect} from "react-redux"
import {setUserProfile, getProfileUser, getStatusUser, updateStatusUser} from "../../redux/profileReducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import Preloader from "../common/Preloader/Preloader"


class ProfileContainer extends React.Component {

	refreshProfile() {
		this.props.setUserProfile(null)
		let queryId = this.props.match.params.userId || this.props.userId
		this.props.getProfileUser(queryId)
		this.props.getStatusUser(queryId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return <>
			{!this.props.profile
				? <Preloader/>
				: <Profile profile={this.props.profile}
				           status={this.props.status}
				           updateStatusUser={this.props.updateStatusUser}
				           isOwner={!!this.props.match.params.userId}
				/>
			}
		</>
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	userId: state.auth.id,
})


export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {setUserProfile, getProfileUser, getStatusUser, updateStatusUser})
)(ProfileContainer)