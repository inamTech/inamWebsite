// This is the component for the navigation bar.

import React from "react";
import styles from "./Navbar.module.css";

import inamLogo from "../../images/inam-logo.png";
import hamburgerMenu from "../../images/hamburger-menu-icon.png";

export default function Navbar() {
  return (
    <div id="navbar" className={styles.navbarContainer}>
      <img className={styles.inamLogoMobile} src={inamLogo} alt="INAM Logo" />
      <img
        className={styles.hamburgerMenuIcon}
        src={hamburgerMenu}
        alt="Menu"
      />
    </div>
  );
}
