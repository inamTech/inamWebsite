// This is the component for the Footer section.

import React from "react";
import styles from "./Footer.module.css";
import inamLogo from "../../images/inam-logo.png";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <img className={styles.inamLogo} src={inamLogo} alt="INAM logo" />
      <div className={styles.footerLinksContainer}>
        <Link
          className={styles.footerLink}
          to="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          className={styles.footerLink}
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About Us
        </Link>
        <Link
          className={styles.footerLink}
          to="services"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Services
        </Link>
        <Link
          className={styles.footerLink}
          to="whyInam"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Why INAM
        </Link>
        <Link
          className={styles.footerLink}
          to="contactUs"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact Us
        </Link>
      </div>
      <p className={styles.footerCopyrightText}>
        Copyright © 2022, IN AM Technology, LLC.
      </p>
    </div>
  );
}
