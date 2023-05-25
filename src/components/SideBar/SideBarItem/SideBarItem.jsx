import React from "react";
import classas from './SideBarItem.module.css'

const SideBarItem = (props) => {
    debugger;
    return <div>
        <img className={classas.icon} src={props.icon} alt="" />
        <div><span className={classas.sideBarItem}>{props.name}</span></div>
    </div>
}

export default SideBarItem;