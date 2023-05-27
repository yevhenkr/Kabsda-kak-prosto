import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let onChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let postsElements = props.store.postsPage.posts.map(p => <Post key={p.key} messeges={p.messeges} likeCount={p.likeCount} />)
  return <div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div className={s.myPostTexArea}>
        <textarea ref={newPostElement} ></textarea>
      </div>
      <div className={s.myPostButton}>
        <button 
        onClick={addNewPost} 
        onChange={onChange}
        value={props.store.postsPage.newText}>AddPost</button>
      </div>
    </div>
    {postsElements}
  </div>
}

export default MyPosts;