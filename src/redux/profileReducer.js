import {profileAPI} from "../api/api";

let init = {
	posts: [
		{id: 1, post: 'Post 1', likeCount: 3},
		{id: 2, post: 'Post 2', likeCount: 5},
		{id: 3, post: 'Post 3', likeCount: 7},
	],
	newPostTemp: '',
	profile: null,
};

const profileReducer = (state = init, action) => {

	switch (action.type) {
		case 'ADD-POST':
			if (state.newPostTemp !== '') {
				return {
					...state,
					newPostTemp: '',
					posts: [...state.posts, {id: 8, post: state.newPostTemp, likeCount: 3}]
				}
			}
			return state;

		case 'UPDATE-POST':
			return {
				...state,
				newPostTemp: action.newPost
			};

		case 'SET-USER-PROFILE':
			return {
				...state,
				profile: action.userProfile
			};

		default:
			return state;
	}
};

export const addPostActionCreator = () => ({type: 'ADD-POST'});
export const updatePostActionCreator = (text) => ({type: 'UPDATE-POST', newPost: text });
export const setUserProfile = (profile) => ({type: 'SET-USER-PROFILE', userProfile: profile});

/*---Thunk---*/

export const getProfileUser = (userId) => (dispatch) => {
	profileAPI.profileUsers(userId)
		.then(respons => {
			dispatch(setUserProfile(respons.data));
		});
};

export default profileReducer;