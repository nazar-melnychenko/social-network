import { call, put } from 'redux-saga/effects';
import { dialogsAPI } from '../api/api';
import { setAllDialogs, setMassages } from '../redux/messages/actionCreators';

export function* getDialogs() {
	const response = yield call(dialogsAPI.getDialogs)
	yield put(setAllDialogs(response.data))
}

export function* getMassages({ userId }) {
	const response = yield call(dialogsAPI.getMessages, userId)
	yield put(setMassages(response.data))
}
