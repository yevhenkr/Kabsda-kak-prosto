import React from "react";
import s from './Dialogs.module.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Dialog = (props) => {
  const location = useLocation();
  return <div>
    <Link to={{ pathname: `${location.pathname}/${props.id}` }} className={props.className}>
      {props.name}
    </Link>
  </div>
}

const Message = (props) => {
  return <div>
    {props.name}
  </div>
}

let dialogs = [
  { id: 1, name: 'Kirill', className: `${s.dialoguesItem} ${s.active}` },
  { id: 2, name: "Viky", className: s.dilogesItem },
  { id: 3, name: "Taras", className: s.dilogesItem },
  { id: 4, name: "Nastiy", className: s.dilogesItem },
  { id: 5, name: "Oleg", className: s.dilogesItem }
]

let messages = [
  { id: 1, name: 'Hi' },
  { id: 2, name: "Answer" },
  { id: 3, name: "Yo" },
]

let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} className={d.className} />)
let messagesElements = messages.map(
  m => <Message name={m.name} />
);

const Dialogs = (props) => {
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