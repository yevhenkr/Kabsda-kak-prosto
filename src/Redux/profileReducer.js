import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';


const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ],
    newPostText: '',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_POST: {
            const newePost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newePost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            };
        case SET_PROFILE:
            return { ...state, profile: action.profile };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_PROFILE, profile: profile });
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProile(userId).then(data => {
        // debugger
        dispatch(setUserProfile(data));
    })
};

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getStatus = (userId) => (dispatch) => {
    // debugger

    profileAPI.getStatus(userId)
        .then(data => {
            // debugger

            dispatch(setStatus(data));
        })
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.data.resultCode === 0) {
            debugger
            dispatch(setStatus(status));
        }
    })
    .catch(error => {
        // Обработка ошибки, если не удалось выполнить запрос
        console.log(error);
    });
};


export default profileReducer;