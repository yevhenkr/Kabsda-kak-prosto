import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.posts;
  let postsElements = posts.posts.map(p => <Post key={p.key} messeges={p.messeges} likeCount={p.likeCount} />)
  return <div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div className={s.myPostTexArea}>
        <textarea></textarea>
      </div>
      <div className={s.myPostButton}>
        <button>AddPost</button>
      </div>
    </div>
    {postsElements}
  </div>
}

export default MyPosts;