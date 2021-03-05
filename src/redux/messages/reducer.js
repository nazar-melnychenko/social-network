import { ADD_MESSAGE, SET_ALL_DIALOGS, SET_MESSAGES } from './actionTypes';

let init = {
	dialogs: [],
	massages: [],
}

const messagesReducer = (state = init, {type, payload}) => {

	switch (type) {
		case SET_ALL_DIALOGS:
			return {
				...state,
				dialogs: payload
			}

		case SET_MESSAGES:
			return {
				...state,
				massages: payload
			}

		case ADD_MESSAGE:
			if (payload.massage !== '') {
				return {
					...state,
					massages: [...state.massages, { id: 7, massage: payload.massage }],
				}
			}
			return state

		default:
			return state
	}
}

export default messagesReducer
