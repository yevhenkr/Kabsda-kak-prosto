import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3" }
});


export const profileAPI = {
    me(profileUserId) {
        return instance.get(`profile/` + profileUserId)
            .then(response => response.data);
    }
}

export const authAPI = {
    me() {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data;
            });
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(id = 1) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(id = 1) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    profileAPI(profileUserId) {
        return instance.get(`profile/${profileUserId}`)
            .then(response => response.data);
    }
}
