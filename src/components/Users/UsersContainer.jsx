import {connect} from "react-redux";
import {
	handleSetCurrentPage,
	getUsers,
	follow,
	unFollow
} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";


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

	onSetCurrentPage = (currentPage) => {
		this.props.getUsers(currentPage, this.props.pageSize);
		this.props.handleSetCurrentPage(currentPage);
	};

	render() {

		return <Users totalUsersCount={this.props.totalUsersCount}
		              pageSize={this.props.pageSize}
		              currentPage={this.props.currentPage}
		              users={this.props.users}
		              onFollow={this.onFollow}
		              onUnFollow={this.onUnFollow}
		              onSetCurrentPage={this.onSetCurrentPage}
		              isFetching={this.props.isFetching}
		              followingInProgress={this.props.followingInProgress}
		/>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
};


export default withAuthRedirect(connect(mapStateToProps, {
	handleSetCurrentPage,
	getUsers,
	follow,
	unFollow
})(UsersContainer));




