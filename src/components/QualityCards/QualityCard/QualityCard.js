// This component is the template for each individual quality card.

import React from "react";
import styles from "./QualityCard.module.css";

export default function QualityCard(props) {
  return (
    <div
      className={styles.qualityCard}
      style={{ backgroundColor: props.bgColor }}
    >
      <h1 className={styles.qualityCardText} style={{ color: props.fontColor }}>
        {props.children}
      </h1>
    </div>
  );
}
