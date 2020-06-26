import {connect} from "react-redux";
import {
	setUsers,
	handleFollow,
	handleUnFollow,
	hendleSetCurrentPage,
	setTotalPage,
	setFetching
} from '../../redax/usersReducer';
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.setFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
				this.props.setTotalPage(respons.data.totalCount);
				this.props.setFetching(false);
			});
	}

	onFollow = (id) => {
		this.props.handleFollow(id);
	};

	onUnFollow = (id) => {
		this.props.handleUnFollow(id);
	};

	onSetCurrentPage = (currentPage) => {
		this.props.setFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
				this.props.setTotalPage(respons.data.totalCount);
				this.props.setFetching(false);
			});
		this.props.hendleSetCurrentPage(currentPage);
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
		/>
	}
};

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
};

export default connect(mapStateToProps, {
	setUsers,
	handleFollow,
	handleUnFollow,
	hendleSetCurrentPage,
	setTotalPage,
	setFetching
})(UsersContainer);




