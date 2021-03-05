import { profileAPI } from '../api/api'

let init = {
	posts: [
		{ id: 1, post: 'Post 1', likeCount: 3 },
		{ id: 2, post: 'Post 2', likeCount: 5 },
		{ id: 3, post: 'Post 3', likeCount: 7 },
	],
	profile: null,
	status: ''
}

const profileReducer = (state = init, action) => {

	switch (action.type) {
		case 'ADD-POST':
			if (action.massage !== '') {
				return {
					...state,
					posts: [...state.posts, { id: 8, post: action.massage, likeCount: 3 }]
				}
			}
			return state

		case 'SET-USER-PROFILE':
			return {
				...state,
				profile: action.userProfile
			}

		case 'SET-USER-STATUS':
			return {
				...state,
				status: action.status
			}

		case 'SAVE-PHOTO-SUCCESS':
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.photos
				}
			}

		default:
			return state
	}
}

export const addPost = (massage) => ({ type: 'ADD-POST', massage })
export const setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', userProfile: profile })
const setUserStatus = (status) => ({ type: 'SET-USER-STATUS', status })
const savePhotoSuccess = (photos) => ({ type: 'SAVE-PHOTO-SUCCESS', photos })

/*---Thunk---*/

export const getProfileUser = (userId) => (dispatch) => {
	profileAPI.profileUsers(userId)
		.then(response => {
			dispatch(setUserProfile(response.data))
		})
}

export const getStatusUser = (userId) => (dispatch) => {
	profileAPI.getUsersStatus(userId)
		.then(response => {
			dispatch(setUserStatus(response.data))
		})
}

export const updateStatusUser = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserStatus(status))
			}
		})
}

export const savePhoto = (file) => (dispatch) => {
	profileAPI.savePhoto(file)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(savePhotoSuccess(response.data.data.photos))
			}
		})
}

export default profileReducer
