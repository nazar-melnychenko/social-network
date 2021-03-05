import {
	CREATE_ACCOUNT_FAILED,
	CREATE_ACCOUNT_START,
	CREATE_ACCOUNT_FINISHED,
	CREATE_ACCOUNT_SUCCEEDED
} from './actionTypes';

export const createAccount = payload => ({type: CREATE_ACCOUNT_START, payload})
export const createAccountSuccess = () => ({type: CREATE_ACCOUNT_SUCCEEDED})
export const createAccountFinished = () => ({type: CREATE_ACCOUNT_FINISHED})
export const createAccountFailed = () => ({type: CREATE_ACCOUNT_FAILED})
