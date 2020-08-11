import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '64bd566e-d290-4b79-91a5-151757ce67b6'
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(responsee => responsee.data)
	}
};

export const followAPI = {
	followUsers(id) {
		return instance.delete(`follow/${id}`)
	},
	unFollowUsers(id) {
		return instance.post(`follow/${id}`)
	},
};

export const profileAPI = {
	profileUsers(id) {
		return instance.get(`profile/${id}`)
	},
	getUsersStatus(id) {
		return instance.get(`profile/status/${id}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status})
	}
};

export const authAPI = {
	authMe() {
		return instance.get('auth/me/')
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
	},
	logout() {
		return instance.delete(`/auth/login`)
	},
	captcha() {
		return instance.get(`/security/get-captcha-url`)
	}
};