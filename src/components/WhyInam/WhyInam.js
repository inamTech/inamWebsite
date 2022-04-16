// This is the component for the why inam section.

import React from "react";
import styles from "./WhyInam.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import teamGroupPic from "../../images/group-pic-1.jpg";

export default function WhyInam() {
  return (
    <div id="whyInam" className={styles.whyInamSection}>
      <div className={styles.whyInamText}>
        <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
          <h1 className={styles.whyInamHeader}>Why INAM</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
          <p className={styles.whyInamParagraph}>
            INAM is a team of dedicated and experienced professionals who’s main
            goal is to exceed customer expectations and build long term
            relationship. Our services include, but not limited to Help Desk,
            Cyber Security, System Administrators, and Project Management. We
            have a combination of 30 years of experience.
          </p>
        </AnimationOnScroll>
      </div>
      <img
        className={styles.teamGroupPic}
        src={teamGroupPic}
        alt={"The INAM team."}
      />
    </div>
  );
}
