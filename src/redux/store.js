import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { reducer as formReducer } from "redux-form"
import thunkMiddleware from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
import appReducer from "./appReducer"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import friendsReducer from "./friendsReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import rootSagas from "../sagas";
import SettingsProfileReducer from "./settingsProfile/reducer";

let reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	settingsProfile: SettingsProfileReducer
})

const sagaMiddleware = createSagaMiddleware()


// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunkMiddleware,sagaMiddleware)
))

sagaMiddleware.run(rootSagas)

export default store
