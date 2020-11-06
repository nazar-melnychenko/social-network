import { all } from "redux-saga/effects"
import sendProfileSettingsWatchers from "../redux/settingsProfile/sagaWatchers"

function* rootSagas() {
	yield all([
			...sendProfileSettingsWatchers
		])
}

export default rootSagas
