// This is the component for the Header.
import React from "react";
import styles from "./Header.module.css";
import headerImg from "../../images/header-img.png";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerText}>
        <h1 className={styles.headerTitle}>Lorem ipsum dolor</h1>
        <p className={styles.headerBody}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          corrupti accusamus accusantium ullam rem ipsa vero sequi fugiat, odit
          ad.
        </p>
        <button className={styles.headerButton}>HIRE US</button>
      </div>
      <div className={styles.headerImgContainer}>
        <img
          className={styles.headerImg}
          src={headerImg}
          alt="Computer with INAM logo on the screen."
        />
      </div>
    </div>
  );
}
