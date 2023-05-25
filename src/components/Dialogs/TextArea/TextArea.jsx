import React from "react";
import { Link } from "react-router-dom";
import classes from '../../Profile/MyPosts/MyPosts.module.css'


const TextArea = (props) => {
  let enterElement = React.createRef();

  const showText = () => {
    let text = enterElement.current.value;
    alert(text);
  }
  return <div>
    <h2>Enter message</h2>
    <div>
      <div className={classes.myPostTexArea}>
        <textarea ref={enterElement} ></textarea>
      </div>
      <div className={classes.myPostButton}>
        <button onClick={showText}>AddPost</button>
      </div>
    </div>
  </div>
}

export default TextArea;