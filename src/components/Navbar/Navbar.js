// This is the component for the navigation bar.

import React, { useState } from "react";
import styles from "./Navbar.module.css";

import inamLogo from "../../images/inam-logo.png";
import hamburgerMenu from "../../images/hamburger-menu-icon.png";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../SideDrawer/BackDrop";
import NavLinks from "../SideDrawer/NavLinks";
import { Link } from "react-scroll";

export default function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawerHandler() {
    setDrawerIsOpen(true);
  }

  function closeDrawerHandler() {
    setDrawerIsOpen(false);
  }
  return (
    <div id="navbar" className={styles.navbarContainer}>
      <img className={styles.inamLogoMobile} src={inamLogo} alt="INAM Logo" />
      <ul className={styles.navLinksContainer}>
        <li className={styles.navLink}>
          <Link to="navbar" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to="aboutUs" spy={true} smooth={true} offset={0} duration={500}>
            About Us
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link to="whyInam" spy={true} smooth={true} offset={0} duration={500}>
            Why INAM
          </Link>
        </li>
        <li className={styles.navLink}>
          <button className={styles.navbarButton}>
            <Link
              to="contactUs"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
      <button
        className={styles.hamburgerMenuButton}
        onClick={openDrawerHandler}
      >
        <img
          className={styles.hamburgerMenuIcon}
          src={hamburgerMenu}
          alt="Menu"
        />
      </button>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        {/* <p className={styles.exitNavMenuIcon}>X</p> */}
        <i className={`${styles.exitNavMenuIcon} fa-solid fa-xmark`}></i>
        <NavLinks onClick={closeDrawerHandler} />
      </SideDrawer>
    </div>
  );
}
