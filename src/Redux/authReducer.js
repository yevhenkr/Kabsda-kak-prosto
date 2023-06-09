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

export const setAuthUserData = (serId, email, login) =>
    ({ type: SET_AUTH_USER, data: { serId, email, login } })

export default authReducer;