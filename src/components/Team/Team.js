// This is the component for the Meet Our Team section.

import React from "react";
import styles from "./Team.module.css";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";
import johnByrdPic from "../../images/head-shot-johnByrd.jpg";
import calvinDavisPic from "../../images/head-shot-calvinDavis.jpg";
import chrisDavisPic from "../../images/head-shot-chrisDavis.jpg";
import shawnSmithPic from "../../images/head-shot-shawnSmith.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Team() {
  const animationOnScrollStyles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className={styles.teamSection}>
      <h1 className={styles.teamHeader}>Meet Our Team</h1>
      <div className={styles.teamMembersContainer}>
        <AnimationOnScroll
          animateIn="animate__slideInRight"
          animateOnce={true}
          style={animationOnScrollStyles}
        >
          <TeamMemberCard picture={johnByrdPic} name="John Byrd" position="VP of Operations" />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInLeft"
          animateOnce={true}
          style={animationOnScrollStyles}
        >
          <TeamMemberCard
            picture={calvinDavisPic}
            name="Calvin Davis"
            position="VP of Business Development"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInRight"
          animateOnce={true}
          style={animationOnScrollStyles}
        >
          <TeamMemberCard
            picture={chrisDavisPic}
            name="Chris Davis"
            position="VP of Financial Analysis"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInLeft"
          animateOnce={true}
          style={animationOnScrollStyles}
        >
          <TeamMemberCard picture={shawnSmithPic} name="Shawn Smith" position="President and CEO" />
        </AnimationOnScroll>
      </div>
    </div>
  );
}
