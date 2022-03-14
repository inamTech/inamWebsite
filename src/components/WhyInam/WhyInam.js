// This is the component for the why inam section.

import React from "react";
import styles from "./WhyInam.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function WhyInam() {
  return (
    <div id="whyInam" className={styles.whyInamSection}>
      <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
        <h1 className={styles.whyInamHeader}>Why INAM</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
        <p className={styles.whyInamParagraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatum velit eius totam aspernatur voluptate, nihil natus aut
          nemo. Quod voluptatem beatae tenetur dolor illo repudiandae
          consectetur, cum aliquam? Velit officiis blanditiis iste soluta
          voluptates? Magnam alias, numquam esse maiores natus ipsam ut
          doloribus quam praesentium neque tenetur, voluptate odit.
        </p>
      </AnimationOnScroll>
    </div>
  );
}
