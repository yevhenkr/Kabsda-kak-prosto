import React from "react";
import s from './Dialogs.module.css'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Dialog = (props) => {
  return <div>
    <Link to={`/dialoges/${props.id}`} className={props.className}>
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
  { key: "11", id: 1, name: 'Kirill', className: `${s.dialogesItem} ${s.active}` },
  { key: "12", id: 2, name: "Viky", className: s.dilogesItem },
  { key: "13", id: 3, name: "Taras", className: s.dilogesItem },
  { key: "14", id: 4, name: "Nastiy", className: s.dilogesItem },
  { key: "15", id: 5, name: "Oleg", className: s.dilogesItem }
]

let dialogsElements = dialogs.map(d => <Dialog key={d.key} name={d.name} id={d.id} className={d.className} />)

let messages = [
  { key: "21", id: 1, name: 'Hi' },
  { key: "22", id: 2, name: "Answer" },
  { key: "23", id: 3, name: "Yo" },
]

let messagesElements = messages.map(
  m => <Message key={m.key} name={m.name} />
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