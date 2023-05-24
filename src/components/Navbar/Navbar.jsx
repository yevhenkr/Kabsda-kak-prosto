import React from "react";
import s from './Navbar.module.css';
import { Link, useMatch } from "react-router-dom";


const Navbar = () => {
  const profileMatch = useMatch("/profile");
  const dailogesMatch = useMatch("/dailoges");
  const newsMatch = useMatch("/news");
  const musicMatch = useMatch("/music");
  const settingsMatch = useMatch("/settings");
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Link to="/profile" className={profileMatch ? s.activeLink : ""}>Profile</Link>
      </div>
      {/* <div className={`${s.item} ${s.active}`}> */}
      <div className={`${s.item} ${s.active}`}>
        <Link to="/dialoges" className={dailogesMatch ? s.activeLink : ""}>Messages</Link>
      </div>
      <div className={s.item}>
        <Link to="/news" className={newsMatch ? s.activeLink : ""}>News</Link>
      </div>
      <div className={s.item}>
        <Link to="/music" className={musicMatch ? s.activeLink : ""}>Music</Link>
      </div>
      <div className={s.item}>
        <Link to="/settings" className={settingsMatch ? s.activeLink : ""}>Settings</Link>
      </div>
    </nav>
  )
}
export default Navbar;