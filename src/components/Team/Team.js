// This is the component for the Meet Our Team section.

import React from "react";
import styles from "./Team.module.css";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";
import profilePic1 from "../../images/profilePic-1.png";
import profilePic2 from "../../images/profilePic-2.png";
import profilePic3 from "../../images/profilePic-3.png";
import profilePic4 from "../../images/profilePic-4.png";

export default function Team() {
  return (
    <div className={styles.teamSection}>
      <h1 className={styles.teamHeader}>Meet Our Team</h1>
      <div className={styles.teamMembersContainer}>
        <TeamMemberCard
          picture={profilePic1}
          name="David Ferry"
          position="CO-FOUNDER OF COMPANY"
        />
        <TeamMemberCard
          picture={profilePic2}
          name="Andy Newman"
          position="CO-FOUNDER OF COMPANY"
        />
        <TeamMemberCard
          picture={profilePic3}
          name="Mark Pain"
          position="CTO OF COMPANY"
        />
        <TeamMemberCard
          picture={profilePic4}
          name="Caleb Henderson"
          position="CEO OF COMPANY"
        />
      </div>
    </div>
  );
}
