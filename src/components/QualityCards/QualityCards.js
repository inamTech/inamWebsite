// This is the component for the quality cards section.

import React from "react";
import QualityCard from "./QualityCard/QualityCard";
import styles from "./QualityCards.module.css";

export default function QualityCards() {
  return (
    <div className={styles.qualityCardsContainer}>
      <QualityCard fontColor={"white"} bgColor={"var(--light-blue)"}>
        Robust IT Infrastructure
      </QualityCard>
      <QualityCard fontColor={"white"} bgColor={"var(--medium-blue)"}>
        Transparent Business
      </QualityCard>
      <QualityCard fontColor={"white"} bgColor={"var(--dark-blue)"}>
        Customized Services
      </QualityCard>
    </div>
  );
}
