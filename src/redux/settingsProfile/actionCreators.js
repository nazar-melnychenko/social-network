import { SEND_PROFILE_CHANGES, SEND_PROFILE_CHANGES_SUCCESS } from "./actionTypes"

export const sendProfileSettings = payload => ({ type: SEND_PROFILE_CHANGES, payload })
export const sendProfileSettingsSuccess = () => ({ type: SEND_PROFILE_CHANGES_SUCCESS })
