import {
	CLEARED_PROFILE_NOTIFICATIONS,
	SEND_PROFILE_CHANGES,
	SEND_PROFILE_CHANGES_FAILED,
	SEND_PROFILE_CHANGES_SUCCESS
} from './actionTypes'

export const sendProfileSettings = payload => ({ type: SEND_PROFILE_CHANGES, payload })
export const sendProfileSettingsSuccess = () => ({ type: SEND_PROFILE_CHANGES_SUCCESS })
export const sendProfileSettingsFailed = payload => ({ type: SEND_PROFILE_CHANGES_FAILED, payload })
export const clearedProfileNotifications = () => ({ type: CLEARED_PROFILE_NOTIFICATIONS })
