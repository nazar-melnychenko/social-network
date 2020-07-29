import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers:{
		'API-KEY': '3267285c-80de-4f2a-86d5-8ebc651a7d74'
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	}
};

export const followAPI = {

	followUsers(id){
		return instance.delete(`follow/${id}`)
	},
	unFollowUsers(id){
		return instance.post(`follow/${id}`)
	},
};

export const profileAPI = {
	profileUsers(id) {
		return instance.get(`profile/${id}`)
	}
};

export const authAPI = {
	authMe() {
		return instance.get('auth/me')
	}
};