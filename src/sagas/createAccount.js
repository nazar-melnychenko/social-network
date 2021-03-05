import { call, put } from 'redux-saga/effects';
import { authAPI } from '../api/api';
import { createAccountFailed, createAccountSuccess } from '../redux/createAccount/actionCreators';
import { stopSubmit } from 'redux-form';

export function* createAccount({payload}) {
	const response = yield call(authAPI.createAccount, payload)

	if (!response.data.Response[0].v) {
		yield put(createAccountFailed(response.data.Response[1].v[0].message))
		return yield put(stopSubmit('createAccountForm', { _error: response.data.Response[1].v[0].message }))
	}
	yield put(createAccountSuccess())
}
