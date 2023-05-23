import React from "react";
import s from './Navbar.module.css';
let c2 = "active";
console.log("c2 = " +c2 );
console.log("s.active = " + s.active);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/dailoges">Dailoges</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={s.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  )
}
export default Navbar;