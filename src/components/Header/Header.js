// This is the component for the Header.
import React from "react";
import styles from "./Header.module.css";
import "animate.css/animate.min.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div id="header" className={styles.headerContainer}>
      <div className={styles.headerText}>
        <h2 className={styles.subTitle}>Vision For The Future</h2>
        <h1 className={styles.headerTitle}>INAM</h1>
        {/* Uncomment this when want to add body to header */}
        <p className={styles.headerBody}>
          It’s Not About Me (INAM) Technology is a customer centric IT Consulting Company that helps
          provide affordable but efficient services to help agencies enhance their businesses and
          deploy mission critical projects.
        </p>
        <Link
          className={styles.hireUsLink}
          to="contactUs"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={styles.headerButton}>HIRE US</button>
        </Link>
      </div>
    </div>
  );
}
