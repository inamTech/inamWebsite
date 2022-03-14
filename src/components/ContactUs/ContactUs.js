// This is a component for the Contact Us section.

import React from "react";
import styles from "./ContactUs.module.css";
import mapPinIcon from "../../images/map-pin-icon.png";
import emailIcon from "../../images/email-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    console.log("Sending Email");
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_ornhkl5",
        "template_1s2g7fp",
        e.target,
        "W_YlZRNBoMR-MsRK6"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="contactUs" className={styles.contactUsSection}>
      <div className={styles.contactUsContainer}>
        <div className={styles.contactUsSplit}>
          <AnimationOnScroll
            animateIn="animate__slideInLeft"
            animateOnce={true}
          >
            <h1 className={styles.contactUsHeader}>Contact Us</h1>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__slideInLeft"
            animateOnce={true}
          >
            <p className={styles.contactUsParagraph}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              magni iste tempora aspernatur debitis fugiat.
            </p>
          </AnimationOnScroll>
          {/* Hold the all the contact methods */}
          <div className={styles.contactUsMethods}>
            <AnimationOnScroll
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
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
            <AnimationOnScroll
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
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
            <AnimationOnScroll
              animateIn="animate__slideInLeft"
              animateOnce={true}
            >
              <div className={styles.contactUsMethodContainer}>
                <img
                  className={styles.contactUsMethodIcon}
                  src={phoneIcon}
                  alt="Phone icon"
                />
                <div className={styles.contactUsMethodText}>
                  <h1 className={styles.contactUsMethodHeader}>
                    Our Contact No:
                  </h1>
                  <p className={styles.contactUsMethodParagraph}>
                    (703) 322-7890
                  </p>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        {/* Beginning of contact us form */}
        <div className={styles.contactUsForm}>
          <h1 className={styles.contactUsFormHeader}>Get In Touch</h1>
          <form action="post" onSubmit={sendEmail}>
            <div className={styles.contactUsFormTextInputs}>
              <input
                id="from_name"
                name="from_name"
                className={styles.contactUsFormInput}
                type="text"
                placeholder="Your Name *"
              />
              <input
                id="user_email"
                name="user_email"
                className={styles.contactUsFormInput}
                type="email"
                placeholder="Your Email *"
              />
              <input
                id="reply_to"
                name="reply_to"
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
            <button type="submit" className={styles.contactUsFormButton}>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
