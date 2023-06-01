import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

const store = configureStore({ // Создание хранилища данных с использованием configureStore
    reducer: reducers
});

export default store;