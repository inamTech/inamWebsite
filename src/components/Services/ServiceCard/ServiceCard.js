// This component is the template for the services cards.

import React from "react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard(props) {
  return (
    <div className={styles.serviceCardContainer}>
      <img
        className={styles.serviceCardIcon}
        src={props.icon}
        alt={props.alt}
      />
      <h1 className={styles.serviceCardTitle}>{props.serviceTitle}</h1>
      {/* Uncomment this when it is time to add descriptions to the services */}
      {/* <p className={styles.serviceCardParagraph}>{props.children}</p> */}
    </div>
  );
}
