// This is the component for the services section.

import React from "react";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import systemAdminIcon from "../../images/system-administrator-icon.png";
import projectManagmentIcon from "../../images/project-management-icon.png";
import recruitingIcon from "../../images/recruiting-icon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function xServices() {
  const animationOnScrollStyles = {
    display: "flex",
    justifyContent: "center",
  };
  // This may need to be used for when there is an odd amount of services
  // const lastService = {
  //   gridArea: "lastService",
  //   display: "flex",
  //   justifyContent: "center",
  // };

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
            Our professional and managed services can assess your goals and needs, define a strategy
            to achieve the desired results, and implement the best solution for your team. At INAM,
            we make sure to provide quality services needed for your business to operate
            efficiently. Some professional services we provide but aren’t limited to are:
            Cybersecurity, Network & Infrastructure, Product Development, and Analytics.
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
            If you want your project to run efficiently and end successfully, it will take a quality
            team of experts to plan, strategize, execute, initiate, and complete the tasks at hand.
            At INAM, we will take your vision and seamlessly bring it to life on time and within
            budget.
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
            Outsourcing makes a lot of sense in today’s world. It enables you to concentrate on your
            core activities and also save costs. At INAM we will enable you to identify your core
            strength and take care of the rest for you. We’ll handle the sourcing, evaluation, and
            negotiation process to ensure you get the right person to help you achieve your goals.
          </ServiceCard>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
