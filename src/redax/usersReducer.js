const init = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false

};

const usersReduser = (state = init, action) => {

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

		default:
			return state;
	}
	;
};

export const setUsers = (users) => ({type: 'SET-USERS', users});
export const handleFollow = (id) => ({type: 'FOLLOW', id});
export const handleUnFollow = (id) => ({type: 'UN-FOLLOW', id});
export const hendleSetCurrentPage = (currentPage) => ({type: 'SET-CURRENT-PAGE', currentPage});
export const setTotalPage = (totalUsersCount) => ({type: 'SET-TOTAL-USER-COUNT', totalUsersCount});
export const setFetching = (isFetching) => ({type: 'SET-FETCHING', isFetching});


export default usersReduser;