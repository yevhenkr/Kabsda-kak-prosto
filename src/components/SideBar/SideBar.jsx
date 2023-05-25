import React from "react";
import classas from './SideBar.module.css'
import SideBarItem from './SideBarItem/SideBarItem'
import { Link } from "react-router-dom";

const SideBar = (props) => {
  debugger;

  let sideBarElements = props.items.friends.map(s => <SideBarItem key={s.key} icon={s.icon} name={s.name} />);
  return <div className={classas.sideBar}>
    <h2 className={classas.title}>Friends</h2>
    <div className={classas.sideBarItems}>
      {sideBarElements}
      <SideBarItem item={props.items} />
    </div>
  </div>
}

export default SideBar;