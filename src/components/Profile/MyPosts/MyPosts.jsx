import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({ type: "ADD-POST"});

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });

    }
    let postsElements = props.store.profilePage.posts.map(p => <Post key={p.key} message={p.message} likesCount={p.likesCount} />)
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div className={s.myPostTexArea}>
                <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                ></textarea>
            </div>
            <div className={s.myPostButton}>
                <button
                    onClick={addNewPost}
                    value={props.store.profilePage.newPostText}>AddPost</button>
            </div>
        </div>
        {postsElements}
    </div>
}

export default MyPosts;