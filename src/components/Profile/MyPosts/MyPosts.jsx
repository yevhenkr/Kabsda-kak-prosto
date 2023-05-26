import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    props.store.setPost(text);
  }

  let onChange = () => {
    let text = newPostElement.current.value;
    props.store.setNewText(text);
  }

  let posts = props.store.state.postsPage;
  let postsElements = posts.posts.map(p => <Post key={p.key} messeges={p.messeges} likeCount={p.likeCount} />)
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
        value={posts.newText}>AddPost</button>
      </div>
    </div>
    {postsElements}
  </div>
}

export default MyPosts;