import React from "react";
import { Link } from "react-router-dom";
import classes from '../../Profile/MyPosts/MyPosts.module.css'
import { setNewMessageCreateCation, addMessageCreateCation } from '../../../Redux/State/State'


const TextArea = (props) => {
  let enterElement = React.createRef();

  const onMessageChange = () => {
    let text = enterElement.current.value;
    props.dispatch(setNewMessageCreateCation(text));
  }
  const addMessage = () => {
    props.dispatch(addMessageCreateCation());
    enterElement.current.value = "";
  }
  return <div>
    <h2>{props.title}</h2>
    <div>
      <div className={classes.myPostTexArea}>
        <textarea ref={enterElement}
          onChange={onMessageChange}
          />
      </div>
      <div className={classes.myPostButton}>
        <button
          onClick={addMessage}
        >AddPost</button>
      </div>
    </div>
  </div>
}

export default TextArea;