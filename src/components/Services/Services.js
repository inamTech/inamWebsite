// This is the component for the services section.

import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import helpDeskIcon from "../../images/help-desk-icon.png";
import cyberSecurityIcon from "../../images/cyber-security-icon.png";
import systemAdminIcon from "../../images/system-administrator-icon.png";
import projectManagmentIcon from "../../images/project-management-icon.png";

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesHeader}>Our Services</h1>
      <div className={styles.servicesCardsContainer}>
        <ServiceCard
          icon={helpDeskIcon}
          alt="Help desk icon."
          serviceTitle="Help Desk"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptates, impedit error expedita facere magni ducimus quod illo
          nihil assumenda?
        </ServiceCard>
        <ServiceCard
          icon={cyberSecurityIcon}
          alt="Cyber security icon."
          serviceTitle="Cyber Security"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptates, impedit error expedita facere magni ducimus quod illo
          nihil assumenda?
        </ServiceCard>
        <ServiceCard
          icon={systemAdminIcon}
          alt="System administration icon."
          serviceTitle="System Administration"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptates, impedit error expedita facere magni ducimus quod illo
          nihil assumenda?
        </ServiceCard>
        <ServiceCard
          icon={projectManagmentIcon}
          alt="Project management icon."
          serviceTitle="Project Management"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptates, impedit error expedita facere magni ducimus quod illo
          nihil assumenda?
        </ServiceCard>
      </div>
    </div>
  );
}
