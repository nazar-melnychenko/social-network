import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./appReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.state = store;