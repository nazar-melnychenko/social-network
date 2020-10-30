import { createSelector } from "reselect"

export const getAllUsers = createSelector(
	(state) => state.usersPage.users,
	(users) => users
)

export const getPageSize = createSelector(
	(state) => state.usersPage.pageSize,
	(pageSize) => pageSize
)

export const getTotalUsersCount = createSelector(
	(state) => state.usersPage.totalUsersCount,
	(totalUsersCount) => totalUsersCount
)

export const getCurrentPage = createSelector(
	(state) => state.usersPage.currentPage,
	(currentPage) => currentPage
)

export const getIsFetching = createSelector(
	(state) => state.usersPage.isFetching,
	(isFetching) => isFetching
)

export const getFollowingInProgress = createSelector(
	(state) => state.usersPage.followingInProgress,
	(followingInProgress) => followingInProgress
)
