import { takeLatest } from 'redux-saga/effects'
import { SEND_PROFILE_CHANGES } from './actionTypes'
import { sendProfileSettings } from '../../sagas/settingsProfile'

const sendProfileSettingsWatchers = [
	takeLatest(SEND_PROFILE_CHANGES, sendProfileSettings),
]

export default sendProfileSettingsWatchers
