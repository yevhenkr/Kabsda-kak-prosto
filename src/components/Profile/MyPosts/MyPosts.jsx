import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../Redux/profileReducer"

const MyPosts = (props) => {
    let state = props.store.getState().profilePage;
    let newPostText = state.newPostText;
    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    }
    let profilePage = props.store.getState().profilePage;

    let postsElements = profilePage.posts.map(p => <Post key={p.key} message={p.message} likesCount={p.likesCount} />)
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div className={s.myPostTexArea}>
                <textarea value={newPostText}
                    ref={newPostElement}
                    onChange={onPostChange}
                ></textarea>
            </div>
            <div className={s.myPostButton}>
                <button
                    onClick={addNewPost}
                    value={profilePage.newPostText}>AddPost</button>
            </div>
        </div>
        {postsElements}
    </div>
}



export default MyPosts;