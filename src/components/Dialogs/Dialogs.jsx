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

const Dialogs = (props) => {
  // const location = useLocation();
  return <div className={s.diloges}>
    <div className={s.dilogesItems}>
      <Dialog name='Kirill' id='1' className={`${s.dialoguesItem} ${s.active}`} />
      <Dialog name='Viky' id='2' className={s.dilogesItem} />
      <Dialog name='Taras' id='3' className={s.dilogesItem} />
      <Dialog name='Nastiy' id='4' className={s.dilogesItem} />
      <Dialog name='Oleg' id='5' className={s.dilogesItem} />
    </div>
    <div className={s.dilogesMesseges}>
      <Message name='Hi' />
      <Message name='Answer' />
      <Message name='Yo' />
      {/* <div className={s.messeg}>Hi</div>
      <div className={s.messeg}> Answer</div>
      <div className={s.messeg}>Yo</div> */}
    </div>
  </div>

}
export default Dialogs;