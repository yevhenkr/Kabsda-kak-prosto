import React from "react";
import { connect } from "react-redux";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../Redux/profileReducer"
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        profilePage: state.profilePage
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        addNewPost: () => { dispatch(addPostActionCreator()) },

        changePost: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispathToProps)(MyPosts);

export default MyPostsContainer;