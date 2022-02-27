// This is the template for the team member cards.

import React from "react";
import styles from "./TeamMemberCard.module.css";

export default function TeamMemberCard(props) {
  return (
    <div className={styles.teamMemberCardContainer}>
      <img
        className={styles.teamMemberPic}
        src={props.picture}
        alt={props.alt}
      />
      <h1 className={styles.teamMemberName}>{props.name}</h1>
      <h2 className={styles.teamMemberPosition}>{props.position}</h2>
    </div>
  );
}
