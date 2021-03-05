import { takeLatest } from 'redux-saga/effects';
import { GET_ALL_DIALOGS, GET_MESSAGES } from './actionTypes';
import { getDialogs, getMassages } from '../../sagas/messages';


const messagesWatchers = [
	takeLatest(GET_ALL_DIALOGS, getDialogs),
	takeLatest(GET_MESSAGES, getMassages),
]

export default messagesWatchers
