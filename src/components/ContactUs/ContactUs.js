// This is a component for the Contact Us section.

import React from "react";
import styles from "./ContactUs.module.css";
import mapPinIcon from "../../images/map-pin-icon.png";
import emailIcon from "../../images/email-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function ContactUs() {
  return (
    <div className={styles.contactUsSection}>
      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
        <h1 className={styles.contactUsHeader}>Contact Us</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
        <p className={styles.contactUsParagraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam magni
          iste tempora aspernatur debitis fugiat.
        </p>
      </AnimationOnScroll>
      {/* Hold the all the contact methods */}
      <div className={styles.contactUsMethods}>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <div className={styles.contactUsMethodContainer}>
            <img
              className={styles.contactUsMethodIcon}
              src={mapPinIcon}
              alt="Map pin icon"
            />
            <div className={styles.contactUsMethodText}>
              <h1 className={styles.contactUsMethodHeader}>Our Address:</h1>
              <p className={styles.contactUsMethodParagraph}>
                9618 Wigfall Way Manassas Park, VA 20111
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <div className={styles.contactUsMethodContainer}>
            <img
              className={styles.contactUsMethodIcon}
              src={emailIcon}
              alt="Email icon"
            />
            <div className={styles.contactUsMethodText}>
              <h1 className={styles.contactUsMethodHeader}>Our Email:</h1>
              <p className={styles.contactUsMethodParagraph}>
                contactus@inam.com
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <div className={styles.contactUsMethodContainer}>
            <img
              className={styles.contactUsMethodIcon}
              src={phoneIcon}
              alt="Phone icon"
            />
            <div className={styles.contactUsMethodText}>
              <h1 className={styles.contactUsMethodHeader}>Our Contact No:</h1>
              <p className={styles.contactUsMethodParagraph}>(703) 322-7890</p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      {/* Beginning of contact us form */}
      <div className={styles.contactUsForm}>
        <h1 className={styles.contactUsFormHeader}>Get In Touch</h1>
        <form action="post">
          <div className={styles.contactUsFormTextInputs}>
            <input
              className={styles.contactUsFormInput}
              type="text"
              placeholder="Your Name *"
            />
            <input
              className={styles.contactUsFormInput}
              type="email"
              placeholder="Your Email *"
            />
            <input
              className={styles.contactUsFormInput}
              type="text"
              placeholder="Company Name"
            />
            <textarea
              className={styles.contactUsFormInput}
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message..."
            ></textarea>
          </div>
        </form>
        <button className={styles.contactUsFormButton}>SEND MESSAGE</button>
      </div>
    </div>
  );
}
