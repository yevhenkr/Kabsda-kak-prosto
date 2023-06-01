import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../Redux/profileReducer"
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    }
}
const mapDispathToProps = (dispatch) => {
    debugger

    return {
        addNewPost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        changePost: () => { dispatch(addPostActionCreator()) }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;