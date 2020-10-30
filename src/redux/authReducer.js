import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const init = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false,
	captcha: null,
}

const authReducer = (state = init, action) => {

	switch (action.type) {
		case 'auth/SET-USERS-DATA':
			return {
				...state,
				...action.payload,
			}
		case 'auth/SET-CAPTCHA':
			return {
				...state,
				captcha: action.url,
			}

		default:
			return state
	}
}

const setAuthUsersData = (id, email, login, isAuth, captcha) => ({
	type: 'auth/SET-USERS-DATA',
	payload: { id, email, login, isAuth, captcha }
})
const setCaptcha = (url) => ({ type: 'auth/SET-CAPTCHA', url })

/*---Thunk---*/

export const auth = () => async (dispatch) => {
	const response = await authAPI.authMe()
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setAuthUsersData(id, email, login, true, null))
	}
}

const getCaptcha = (res) => async (dispatch) => {
	const messages = res.data.messages.length > 0 ? res.data.messages[0] : "Error"
	let response = await authAPI.captcha()
	dispatch(stopSubmit("login", { _error: messages }))
	dispatch(setCaptcha(response.data.url))
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		dispatch(auth())
	} else if (response.data.resultCode === 10) {
		dispatch(getCaptcha(response))
	} else {
		const messages = response.data.messages.length > 0 ? response.data.messages[0] : "Error"
		dispatch(stopSubmit("login", { _error: messages }))
	}
}

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUsersData(null, null, null, false))
	}
}

export default authReducer
