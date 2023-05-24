import React from "react";
import { Link } from "react-router-dom";

const Dialog = (props) => {
  return <div>
    <Link to={`/dialoges/${props.id}`} className={props.className}>
      {props.name}
    </Link>
  </div>
}

export default Dialog;