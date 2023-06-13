import { authAPI } from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';
const InitState = {
    data: {
        id: null,
        login: null,
        email: null,
        isAuth: false,
    }
}

const authReducer = (state = InitState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email) =>
    ({ type: SET_AUTH_USER, data: { id, login, email } })

export const getAuthUserData = () => (dispath) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispath(setAuthUserData(id, login, email));
            }
        });
}

export default authReducer;