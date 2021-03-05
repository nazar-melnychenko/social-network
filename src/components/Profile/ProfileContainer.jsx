import React from 'react'
import './Profile.sass'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileUser, getStatusUser, setUserProfile, updateStatusUser } from '../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import Preloader from '../common/Preloader/Preloader'


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
		const { profile, status, updateStatusUser, match, userId } = this.props
		return <>
			{!profile
				? <Preloader/>
				: <Profile profile={profile}
				           status={status}
				           updateStatusUser={updateStatusUser}
				           isOwner={!match.params.userId || +match.params.userId === +userId}
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
	connect(mapStateToProps, { setUserProfile, getProfileUser, getStatusUser, updateStatusUser })
)(ProfileContainer)
