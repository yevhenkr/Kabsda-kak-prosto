import React from "react";
import s from './Header.module.css';


const Header = () => {
  return (
      <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' />
      </header>
  )
}
export default Header;