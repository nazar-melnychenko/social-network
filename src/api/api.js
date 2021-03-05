import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '780aa080-d23d-40e9-aa30-d5c233e8f61e'
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(responsee => responsee.data)
	}
}

export const followAPI = {
	followUsers(id) {
		return instance.delete(`follow/${id}`)
	},
	unFollowUsers(id) {
		return instance.post(`follow/${id}`)
	},
}

export const profileAPI = {
	profileUsers(id) {
		return instance.get(`profile/${id}`)
	},
	getUsersStatus(id) {
		return instance.get(`profile/status/${id}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status })
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	updateProfile(contacts) {
		return instance.put('/profile', contacts)
	}
}

export const authAPI = {
	createAccount(joinModel) {
		return axios.post('https://social-network.samuraijs.com/Auth/Auth/TryRegister',{ joinModel })
	},
	authMe() {
		return instance.get('auth/me/')
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`/auth/login`, { email, password, rememberMe, captcha })
	},
	logout() {
		return instance.delete(`/auth/login`)
	},
	captcha() {
		return instance.get(`/security/get-captcha-url`)
	}
}

export const dialogsAPI = {
	async getDialogs() {
		return instance.get('dialogs')
	},
	 startChatting(userId) {
		return instance.put(`dialogs/${userId}`)
	},
	getMessages(userId) {
		return instance.get(`dialogs/${userId}/messages`)
	},
	sendMessage(userId, body) {
		return instance.post(`dialogs/${userId}/messages`, { body })
	},
	isMessageViewed(messageId) {
		return instance.get(`dialogs/messages/${messageId}/viewed`)
	},
	moveToSpam(messageId) {
		return instance.post(`dialogs/messages/${messageId}/spam`)
	},
	deleteMessage(messageId) {
		return instance.delete(`dialogs/messages/${messageId}`)
	},
	restoreMessage(messageId) {
		return instance.put(`dialogs/messages/${messageId}/restore`)
	},
	getNewestMessages(userId, date) {
		return instance.get(`dialogs/${userId}/messages/new?newerThen=${date}`)
	},
	getNewMessages() {
		return instance.get(`dialogs/messages/new/count`)
	}
}

const body = 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test '

dialogsAPI.getMessages(26)
