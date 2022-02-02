import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import css from "./header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <h1 className={css.Logo}>WikiPigeon</h1>

      <div className={css.loginsection}>
        <Profile />
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
