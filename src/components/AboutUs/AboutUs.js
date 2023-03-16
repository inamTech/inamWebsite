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
          INAM Technology LLC is a Women, Minority, and Disabled Veteran Owned IT consultant,
          providing an exclusive range of services to the valued customer. INAM is a team of
          dedicated and experienced professionals, having multiple certifications and expertise in
          the domain of Information Technology. With a customer centric approach, we always strive
          to exceed the expectations and build long-term relationships. Our services include, but
          not limited to Professional and Managed Services, Project Management, and Executive
          Sourcing and Recruiting.
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} delay={250}>
        <Link to="whyInam" spy={true} smooth={true} offset={-100} duration={500}>
          <button className={styles.aboutUsbutton}>LEARN MORE</button>
        </Link>
      </AnimationOnScroll>
    </div>
  );
}
