import { call, put } from 'redux-saga/effects'
import { sendProfileSettingsFailed, sendProfileSettingsSuccess } from '../redux/settingsProfile/actionCreators';
import { profileAPI } from '../api/api';

export function* sendProfileSettings({ payload }) {
	const res = yield call(profileAPI.updateProfile, payload)
	if (res.data?.resultCode === 0) {
		yield put(sendProfileSettingsSuccess())
	} else {
		yield put(sendProfileSettingsFailed(res.data.messages))
	}
}

