import { connect } from "react-redux"
import { follow, getUsers, unFollow } from '../../redux/usersReducer'
import React from "react"
import Users from "./Users"
import {
	getAllUsers,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount
} from "../../redux/selectors/users"
import Paginator from "../common/Paginator/Paginator";


class UsersContainer extends React.Component {

	componentDidMount() {
		const { currentPage, pageSize } = this.props
		this.props.getUsers(currentPage, pageSize)
	}

	onFollow = (id) => {
		this.props.follow(id)
	}

	onUnFollow = (id) => {
		this.props.unFollow(id)

	}

	getUsersForCurrentPage = (currentPage) => {
		const { pageSize } = this.props
		this.props.getUsers(currentPage, pageSize)
	}

	render() {
		return (
			<div>
				<Users users={this.props.users}
				       onFollow={this.onFollow}
				       onUnFollow={this.onUnFollow}
				       isFetching={this.props.isFetching}
				       followingInProgress={this.props.followingInProgress}
				/>
				<Paginator
					totalItemsCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					onSetCurrentPage={this.getUsersForCurrentPage}
					currentPage={this.props.currentPage}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: getAllUsers(state),
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
})

export default connect(mapStateToProps, { getUsers, follow, unFollow })(UsersContainer)





