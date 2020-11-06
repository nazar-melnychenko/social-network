import { call, put } from 'redux-saga/effects'
import { sendProfileSettingsSuccess } from "../redux/settingsProfile/actionCreators";
import { profileAPI } from "../api/api";

function* _saveProfileSettings({ payload }) {
	yield call(profileAPI.updateProfile,  payload )
	yield put(sendProfileSettingsSuccess())
}

export const sendProfileSettings = _saveProfileSettings
