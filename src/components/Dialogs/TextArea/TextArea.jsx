import React from "react";
import { Link } from "react-router-dom";
import classes from '../../Profile/MyPosts/MyPosts.module.css'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../Redux/State/State'


const TextArea = (props) => {
  let enterElement = React.createRef();
  const onMessageChange = () => {
    let text = enterElement.current.value;
    props.dispatch(updateNewMessageBodyCreator(text));
  }
  const addMessage = () => {
    props.dispatch(sendMessageCreator());
    enterElement.current.value = "";
  }
  return <div>
    <h2>{props.title}</h2>
    <div>
      <div className={classes.myPostTexArea}>
        <textarea ref={enterElement}
          onChange={onMessageChange}
          // value={props.dialogePage.newMessage}
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