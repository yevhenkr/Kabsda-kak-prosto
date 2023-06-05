import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    sidebar: sidebarReducer
});

const store = configureStore({ // Создание хранилища данных с использованием configureStore
    reducer: reducers
});

window.store = store;
export default store;