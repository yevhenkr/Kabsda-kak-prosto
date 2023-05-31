import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../Redux/profileReducer"
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let profilePage = props.store.getState().profilePage;
    let state = props.store.getState().profilePage;
    let newPostText = state.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));

    }

    return <MyPosts
        changePost={onPostChange}
        addNewPost={addPost}
        newPostText={newPostText}
        profilePage={profilePage}/>
}

export default MyPostsContainer;