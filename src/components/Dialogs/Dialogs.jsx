import React from "react";
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import TextArea from "./TextArea/TextArea"


  
const Dialogs = (props) => {
  let dialogePage = props.dialogsPage;
  let messagesElements = dialogePage.dialogs.map(m => <Message key={m.key} name={m.name} />);
  let dialogsElements = dialogePage.dialogs.map(d => <Dialog key={d.key} name={d.name} id={d.id} className={d.className} />)
  return <div className={s.diloges}>
    <div className={s.dilogesItems}>
      {dialogsElements}
    </div>
    <div className={s.dilogesMessages}>
      {messagesElements}
    </div>
    <TextArea />
  </div>
}

export default Dialogs;