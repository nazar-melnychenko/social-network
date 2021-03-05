import { takeLatest } from 'redux-saga/effects';
import { CREATE_ACCOUNT_START } from './actionTypes';
import { createAccount } from '../../sagas/createAccount';

const createAccountWatchers = [
	takeLatest(CREATE_ACCOUNT_START, createAccount)
]

export default createAccountWatchers;
