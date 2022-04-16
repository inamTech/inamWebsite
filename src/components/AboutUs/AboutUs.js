// This is the component for the About Us section.

import React from "react";
import styles from "./AboutUs.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-scroll";

export default function AboutUs() {
  return (
    <div id="aboutUs" className={styles.aboutUsSection}>
      <AnimationOnScroll animateIn="animate__slideInDown" animateOnce={true}>
        <h1 className={styles.aboutUsHeader}>About Us</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <h2 className={styles.aboutUsSubtitle}>A Team of Industry Experts</h2>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
        <p className={styles.aboutUsParagraph}>
          INAM Technology LLC is a Women, Minority, and Disabiled Veteran Owned
          Small Business IT firm, providing an exclusive range of IT services to
          the valued customers. INAM is a team of dedicated and experienced
          professionals, having multiple expertise and certifications in the
          domain of Information Technology. With customized services and
          customer centric approach, we always strive to exceed the customer
          expectations and build long-term relations with them. Our services
          include, but not limited to Help Desk, Cyber Security, System
          Administrators, and Project Management.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce={true}
        delay={250}
      >
        <Link
          to="whyInam"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className={styles.aboutUsbutton}>LEARN MORE</button>
        </Link>
      </AnimationOnScroll>
    </div>
  );
}
