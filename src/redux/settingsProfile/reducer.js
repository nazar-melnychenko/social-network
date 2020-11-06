import { SEND_PROFILE_CHANGES, SEND_PROFILE_CHANGES_SUCCESS } from "./actionTypes";

const init = {
	isSending: false,
	error: false
}

const SettingsProfileReducer = (state = init, { type }) => {
	switch (type){
		case SEND_PROFILE_CHANGES:
			return {
				...state,
				isSending: true,
				error: null
			}
		case SEND_PROFILE_CHANGES_SUCCESS:
			return {
				...state,
				isSending: false,
				error: null
			}
		default:
			return state

	}
}

export default SettingsProfileReducer
