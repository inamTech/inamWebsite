// This is the component for the services section.

import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import helpDeskIcon from "../../images/help-desk-icon.png";
import cyberSecurityIcon from "../../images/cyber-security-icon.png";
import systemAdminIcon from "../../images/system-administrator-icon.png";
import projectManagmentIcon from "../../images/project-management-icon.png";
import recruitingIcon from "../../images/recruiting-icon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Services() {
  const animationOnScrollStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const lastService = {
    gridArea: "lastService",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div id="services" className={styles.servicesContainer}>
      <h1 className={styles.servicesHeader}>Our Services</h1>
      <div className={styles.servicesCardsContainer}>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce={true}
          style={animationOnScrollStyles}
        >
          <ServiceCard
            icon={systemAdminIcon}
            alt="System administration icon."
            serviceTitle="Professional and Managed Services"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates, impedit
            error expedita facere magni ducimus quod illo nihil assumenda?
          </ServiceCard>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce={true}
          style={animationOnScrollStyles}
        >
          <ServiceCard
            icon={projectManagmentIcon}
            alt="Project management icon."
            serviceTitle="Project Management"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates, impedit
            error expedita facere magni ducimus quod illo nihil assumenda?
          </ServiceCard>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce={true}
          style={animationOnScrollStyles}
        >
          <ServiceCard
            icon={recruitingIcon}
            alt="Project management icon."
            serviceTitle="Executive Sourcing and Recruiting Services"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates, impedit
            error expedita facere magni ducimus quod illo nihil assumenda?
          </ServiceCard>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
