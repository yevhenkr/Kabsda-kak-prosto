import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
  return <div>
      <div>
        <textarea></textarea>
        <button>AddPost</button>
      </div>
      <Post messeges='My post' likeCount='2'/>
      <Post messeges='My post2' likeCount='4'/>
      <Post messeges='My post3' likeCount='6'/>
      <Post messeges='My post4' likeCount='8'/>
    </div>
}
export default MyPosts;