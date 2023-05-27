import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  // debugger;
  return <div className={s.item}>
    <img src="https://img.icons8.com/?size=512&id=VH3KtyBYQZhD&format=png" />
    {props.message}
    <div>
      <span>like: {props.likesCount}</span>
    </div>
  </div>
}
export default Post;