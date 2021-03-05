import {
	CREATE_ACCOUNT_FAILED,
	CREATE_ACCOUNT_FINISHED,
	CREATE_ACCOUNT_START,
	CREATE_ACCOUNT_SUCCEEDED
} from './actionTypes';

const init = {
	isLoading: false,
	isCreated: false
}

const CreateAccountReducer = (state = init, { type }) => {
	switch (type) {
		case CREATE_ACCOUNT_START:
			return {
				...state,
				isLoading: true,
			}

		case CREATE_ACCOUNT_SUCCEEDED:
			return {
				...state,
				isLoading: false,
				isCreated: true,
			}

		case CREATE_ACCOUNT_FINISHED:
			return {
				...state,
				isLoading: false,
				isCreated: false,
			}

		case CREATE_ACCOUNT_FAILED:
			return {
				...state,
				isLoading: false,
			}
		default:
			return state
	}
}

export default CreateAccountReducer;
