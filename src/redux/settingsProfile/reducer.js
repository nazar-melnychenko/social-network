import {
	CLEARED_PROFILE_NOTIFICATIONS,
	SEND_PROFILE_CHANGES,
	SEND_PROFILE_CHANGES_FAILED,
	SEND_PROFILE_CHANGES_SUCCESS
} from './actionTypes';

const init = {
	isSending: false,
	isSentCompleted: false,
	errors: false
}

const SettingsProfileReducer = (state = init, { type, payload }) => {
	switch (type) {
		case SEND_PROFILE_CHANGES:
			return {
				...state,
				isSending: true,
				errors: null
			}
		case SEND_PROFILE_CHANGES_SUCCESS:
			return {
				...state,
				isSending: false,
				isSentCompleted: true,
				errors: null
			}
		case SEND_PROFILE_CHANGES_FAILED:
			return {
				...state,
				isSending: false,
				isSentCompleted: false,
				errors: payload
			}
		case CLEARED_PROFILE_NOTIFICATIONS:
			return {
				...state,
				isSentCompleted: false,
				errors: null
			}
		default:
			return state

	}
}

export default SettingsProfileReducer
