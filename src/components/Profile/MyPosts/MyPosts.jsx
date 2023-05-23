import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

let posts = [
  { messeges: 'My post', likeCount: '2' },
  { messeges: 'My post2', likeCount: '4' },
  { messeges: 'My post3', likeCount: '6' },
  { messeges: 'My post4', likeCount: '8' }
]

let postsElements = posts.map(p => <Post messeges={p.messeges} likeCount={p.likeCount} />)

const MyPosts = () => {
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