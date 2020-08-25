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
}

const dialogsReducer = (state = init, action) => {

	switch (action.type) {
		case 'ADD-MASSAGE':
			if (action.massage !== '') {
				return {
					...state,
					massages: [...state.massages, {id: 7, massage: action.massage}],
				}
			}
			return state

		default:
			return state
	}
}


export const addMassage = (massage) => ({ type: 'ADD-MASSAGE', massage})


export default dialogsReducer