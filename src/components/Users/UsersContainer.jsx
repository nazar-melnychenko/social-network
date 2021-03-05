import { connect } from 'react-redux'
import { follow, getUsers, onPageSizeChange, unFollow } from '../../redux/usersReducer'
import React from 'react'
import { Pagination } from 'antd';
import './UsersContainer.sass'
import Users from './Users'
import {
	getAllUsers,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount
} from '../../redux/selectors/users'
import Preloader from '../common/Preloader/Preloader'


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

	getUsersForCurrentPage = (currentPage, pageSize) => {
		this.props.getUsers(currentPage, pageSize)
	}

	onShowSizeChange = (current, size) => {
		this.props.onPageSizeChange(size);
	}

	render() {
		return (
			<>
				{this.props.isFetching
					? <Preloader/>
					: <div>
						<Users users={this.props.users}
						       onFollow={this.onFollow}
						       onUnFollow={this.onUnFollow}
						       followingInProgress={this.props.followingInProgress}
						/>
						<div className="paginationWrapper">
							<Pagination onChange={this.getUsersForCurrentPage}
							            defaultPageSize={this.props.pageSize}
							            defaultCurrent={this.props.currentPage}
							            total={this.props.totalUsersCount}
							            onShowSizeChange={this.onShowSizeChange}

							/>
						</div>
					</div>
				}
			</>
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

export default connect(mapStateToProps, { getUsers, follow, unFollow, onPageSizeChange })(UsersContainer)





