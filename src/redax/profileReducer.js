let init = {
	posts: [
		{id: 1, post: 'Post 1', likeCount: 3},
		{id: 2, post: 'Post 2', likeCount: 5},
		{id: 3, post: 'Post 3', likeCount: 7},
	],
	newPostTemp: '',
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
				newPostTemp: action.newPost
			};

		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	}
};

export const updatePostActionCreator = (text) => {
	return {
		type: 'UPDATE-POST',
		newPost: text
	}
};

export const setUserProfile = (profile) => {
	return {
		type: 'SET-USER-PROFILE',
		userProfile: profile
	}
};

export default profileReducer;