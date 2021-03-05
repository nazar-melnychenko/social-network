import { all } from 'redux-saga/effects'
import sendProfileSettingsWatchers from '../redux/settingsProfile/sagaWatchers'
import createAccountWatchers from '../redux/createAccount/sagaWatchers'
import messagesWatchers from '../redux/messages/sagaWatchers';

function* rootSagas() {
	yield all([
		...sendProfileSettingsWatchers,
		...createAccountWatchers,
		...messagesWatchers
	])
}

export default rootSagas
