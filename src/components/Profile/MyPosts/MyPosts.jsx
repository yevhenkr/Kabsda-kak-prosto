import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostText = props.newPostText;
    let profilePage = props.profilePage;

    let addNewPost = () => {
        props.addNewPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.changePost(text);
    }

    let postsElements = profilePage.posts.map(p => <Post key={p.key} message={p.message} likesCount={p.likesCount} />)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div className={s.myPostTexArea}>
                <textarea value={newPostText}
                    onChange={onPostChange}
                    placeholder='Enter your post' />
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