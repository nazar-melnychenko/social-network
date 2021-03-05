import { auth } from './authReducer'


const init = {
	initialized: false,
}

const appReducer = (state = init, action) => {

	switch (action.type) {
		case 'SET-INITIALIZED':
			return {
				...state,
				initialized: true,
			}
		default:
			return state
	}
}

const initializedSuccess = () => ({ type: 'SET-INITIALIZED' })


/*---Thunk---*/

export const initializeApp = () => (dispatch) => {

	let promise = dispatch(auth())

	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess())
		})
}


export default appReducer
