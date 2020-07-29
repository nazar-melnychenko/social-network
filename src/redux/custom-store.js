import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, post: 'Post 1', likeCount: 3},
				{id: 2, post: 'Post 2', likeCount: 5},
				{id: 3, post: 'Post 3', likeCount: 7},
			],
			newPostTemp: '',
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Nazar'},
				{id: 2, name: 'Andriy'},
				{id: 3, name: 'Saha'},
				{id: 4, name: 'Viktor'},
				{id: 5, name: 'Sveta'},
				{id: 6, name: 'Valera'},
				{id: 7, name: 'Masha'},
			],
			massages: [
				{id: 1, massage: 'Message 1'},
				{id: 2, massage: 'Message 2'},
				{id: 3, massage: 'Message 3'},
				{id: 4, massage: 'Message 4'},
				{id: 5, massage: 'Message 5'},
			],
			tempMassage: '',
		},
		friends: [
			{id: 1, name: 'Andriy'},
			{id: 2, name: 'Sasha'},
			{id: 3, name: 'Sveta'},
		],
	},
	_callSubscriber() {
		console.log('State changed');
	},

	get state() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.friends = friendsReducer(this._state.friends, action);

		this._callSubscriber(this._state);

	}

};



export default store;

window.state = store;