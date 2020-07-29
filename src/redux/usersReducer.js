import {followAPI, usersAPI} from "../api/api";

const init = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
};

const usersReducer = (state = init, action) => {

	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				users: state.users.map(item => {
						if (item.id === action.id) {
							return {...item, followed: false}
						}
						return item;
					}
				)
			};

		case 'UN-FOLLOW':
			return {
				...state,
				users: state.users.map(item => {
					if (item.id === action.id) {
						return {...item, followed: true}
					}
					return item;
				})
			};

		case 'SET-USERS':
			return {
				...state,
				users: action.users
			};

		case 'SET-CURRENT-PAGE':
			return {
				...state,
				currentPage: action.currentPage
			};

		case 'SET-TOTAL-USER-COUNT':
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			};

		case 'SET-FETCHING':
			return {
				...state,
				isFetching: action.isFetching
			};

		case 'SET-FOLLOWING-PROGRESS':
			return {
				...state,
				followingInProgress: action.isProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			};

		default:
			return state;
	}
	;
};

/*---AC---*/

const setUsers = (users) => ({type: 'SET-USERS', users});
const handleFollow = (id) => ({type: 'FOLLOW', id});
const handleUnFollow = (id) => ({type: 'UN-FOLLOW', id});
const setTotalPage = (totalUsersCount) => ({type: 'SET-TOTAL-USER-COUNT', totalUsersCount});
const setFetching = (isFetching) => ({type: 'SET-FETCHING', isFetching});
const toggleFollowingProgress = (isProgress, userId) => ({type: 'SET-FOLLOWING-PROGRESS', isProgress, userId});

export const handleSetCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});

/*---Thunk---*/

export const getUsers = (currentPage,pageSize) => (dispatch) => {
	dispatch(setFetching(true));
	usersAPI.getUsers(currentPage, pageSize)
		.then(data => {
			dispatch(setUsers(data.items));
			dispatch(setTotalPage(data.totalCount));
			dispatch(setFetching(false));
		});
};

export const follow = (id) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, id));
	followAPI.followUsers(id)
		.then(respons => {
			if (respons.data.resultCode === 0) {
				dispatch(handleFollow(id));
			}
			dispatch(toggleFollowingProgress(false, id));
		});
};

export const unFollow = (id) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, id));
	followAPI.unFollowUsers(id)
		.then(respons => {
			if (respons.data.resultCode === 0) {
				dispatch(handleUnFollow(id));
			}
			dispatch(toggleFollowingProgress(false, id));
		});
};


export default usersReducer;