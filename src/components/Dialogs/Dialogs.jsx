import React from "react";
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
  let messages = props.messages;
  let messagesElements = messages.map(m => <Message key={m.key} name={m.name} />);
  let dialogs = props.dialogs;
  console.log("dialogs = " + dialogs);
  let dialogsElements = dialogs.map(d => <Dialog key={d.key} name={d.name} id={d.id} className={d.className} />)
  return <div className={s.diloges}>
    <div className={s.dilogesItems}>
      {dialogsElements}
    </div>
    <div className={s.dilogesMessages}>
      {messagesElements}
    </div>
  </div>
}

export default Dialogs;