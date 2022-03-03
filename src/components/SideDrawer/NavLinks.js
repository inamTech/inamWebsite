import React from "react";
import { Link } from "react-scroll";
import styles from "./NavLinks.module.css";

export default function NavLinks(props) {
  return (
    <ul className={styles.navMobileLinksContainer}>
      <li className={styles.navMobileLink}>
        <Link
          to="navbar"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={props.onClick}
        >
          <div className={styles.navLinkTextContainer}>Home</div>
        </Link>
      </li>
      <li className={styles.navMobileLink}>
        <Link
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={props.onClick}
        >
          <div className={styles.navLinkTextContainer}>About Us</div>
        </Link>
      </li>
      <li className={styles.navMobileLink}>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={props.onClick}
        >
          <div className={styles.navLinkTextContainer}>Services</div>
        </Link>
      </li>
      <li className={styles.navMobileLink}>
        <Link
          to="whyInam"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={props.onClick}
        >
          <div className={styles.navLinkTextContainer}>Why INAM</div>
        </Link>
      </li>
      <li className={styles.navMobileLink}>
        <Link
          to="contactUs"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={props.onClick}
        >
          <div className={styles.navLinkTextContainer}>Contact Us</div>
        </Link>
      </li>
    </ul>
  );
}
