let init = {
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
};

const dialogsReducer = (state = init, action) => {

	switch (action.type) {
		case 'ADD-MASSAGE':
			if (state.tempMassage !== '') {
				return {
					...state,
					massages: [...state.massages, {id: 7, massage: state.tempMassage}],
					tempMassage: '',
				};
			}
			return state;

		case 'UPDATE-MASSAGE':
			return {
				...state,
				tempMassage: action.newMassage
			};
		default:
			return state;
	}
};


export const addMassageActionCreator = () => {
	return {
		type: 'ADD-MASSAGE'
	}
};

export const updateMassageActionCreator = (text) => {
	return {
		type: 'UPDATE-MASSAGE',
		newMassage: text
	}
};

export default dialogsReducer;