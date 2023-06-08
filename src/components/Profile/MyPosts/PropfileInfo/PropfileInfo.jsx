import React from "react";
import s from './PropfileInfo.module.css'
import Preloader from "../../../common/preloader/Preloader";

const PropfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return <div className={s.profileInfo}>
    <img src={props.profile.photos.large} />
  </div>
}

export default PropfileInfo;