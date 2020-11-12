import axios from "axios"

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '3446b39b-1655-413e-895c-56e87f4a4af6'
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
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	updateProfile(contacts){
		return instance.put('/profile',  contacts )
	}
}

export const authAPI = {
	signUp(JoinModel) {
		return axios.post('https://social-network.samuraijs.com/Auth/Auth/TryRegister',{ JoinModel })
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
