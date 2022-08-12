// This is a component for the Contact Us section.

import React from "react";
import styles from "./ContactUs.module.css";
import mapPinIcon from "../../images/map-pin-icon.png";
import emailIcon from "../../images/email-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
// import { useForm } from "react-hook-form";

export default function ContactUs() {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();

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
              Give us a call anytime. We would be happy to answer your
              questions.
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
                    info@inamtechnology.com
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
          <form name="contact" method="post" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.contactUsFormTextInputs}>
              <input
                id="name"
                name="name"
                className={styles.contactUsFormInput}
                type="text"
                placeholder="Your Name *"
                required
              />
              <input
                id="email"
                name="email"
                className={styles.contactUsFormInput}
                placeholder="Your Email *"
                type={"email"}
                required
              />
              <input
                id="companyName"
                name="companyName"
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
                required
              ></textarea>
              <div data-netlify-recaptcha="true"></div>
            </div>
            <button type="submit" className={styles.contactUsFormButton}>
              SEND MESSAGE
            </button>
          </form>
          {/* <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="name">Name</label> <br />
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Email</label> <br />
              <input type="email" id="email" name="email" required />
            </p>
            <p>
              <label htmlFor="message">Message</label> <br />
              <textarea id="message" name="message" required></textarea>
            </p>
            <p>
              <input type="submit" value="Submit message" />
            </p>
          </form> */}
        </div>
      </div>
    </div>
  );
}
