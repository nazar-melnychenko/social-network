import {connect} from "react-redux";
import {
	getUsers,
	follow,
	unFollow
} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import {
	getAllUsers,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount
} from "../../redux/selectors/users";


class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onFollow = (id) => {
		this.props.follow(id)
	};

	onUnFollow = (id) => {
		this.props.unFollow(id);

	};

	getUsersForCurrentPage = (currentPage) => {
		this.props.getUsers(currentPage, this.props.pageSize);
	};

	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
		              pageSize={this.props.pageSize}
		              currentPage={this.props.currentPage}
		              users={this.props.users}
		              onFollow={this.onFollow}
		              onUnFollow={this.onUnFollow}
		              onSetCurrentPage={this.getUsersForCurrentPage}
		              isFetching={this.props.isFetching}
		              followingInProgress={this.props.followingInProgress}
		/>
	}
}

const mapStateToProps = (state) => ({
	users: getAllUsers(state),
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
});

export default connect(mapStateToProps, {getUsers, follow, unFollow})(UsersContainer);





