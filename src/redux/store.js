import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import appReducer from "./appReducer"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import friendsReducer from "./friendsReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer
})


// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
	applyMiddleware(thunkMiddleware)
))

export default store