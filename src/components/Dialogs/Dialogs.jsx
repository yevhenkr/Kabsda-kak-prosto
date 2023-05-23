import React from "react";
import s from './Dialogs.module.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const Dialogs = (props) => {
  const location = useLocation();
  return <div className={s.diloges}>
    <div className={s.dilogesItems}>
      <Link to={{ pathname: `${location.pathname}/1` }} className={`${s.dialoguesItem} ${s.active}`}>
        Kirill
      </Link>
      <div className={s.dilogesItem}>Viky</div>
      <div className={s.dilogesItem}>Taras</div>
      <div className={s.dilogesItem}>Nastiy</div>
      <div className={s.dilogesItem}>Oleg</div>
    </div>
    <div className={s.dilogesMesseges}>
      <div className={s.messeg}>Hi</div>
      <div className={s.messeg}></div> Answer</div>
    <div className={s.messeg}>Yo</div>
  </div>
}
export default Dialogs;