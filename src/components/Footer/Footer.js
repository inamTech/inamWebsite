// This is the component for the Footer section.

import React from "react";
import styles from "./Footer.module.css";
import inamLogo from "../../images/inam-logo.png";

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <img className={styles.inamLogo} src={inamLogo} alt="INAM logo" />
      <div className={styles.footerLinksContainer}>
        <a className={styles.footerLink} href="#">
          Home
        </a>
        <a className={styles.footerLink} href="#">
          About Us
        </a>
        <a className={styles.footerLink} href="#">
          Services
        </a>
        <a className={styles.footerLink} href="#">
          Why INAM
        </a>
        <a className={styles.footerLink} href="#">
          Contact Us
        </a>
      </div>
      <p className={styles.footerCopyrightText}>
        Copyright © 2022, IN AM Technology, LLC.
      </p>
    </div>
  );
}
