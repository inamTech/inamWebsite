// This is a component for the Contact Us section.

import React from "react";
import styles from "./ContactUs.module.css";
import mapPinIcon from "../../images/map-pin-icon.png";
import emailIcon from "../../images/email-icon.png";
import phoneIcon from "../../images/phone-icon.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function sendEmail(e, data) {
    console.log("Sending Email");
    console.log(data.target);
    emailjs
      .sendForm(
        "service_ornhkl5",
        "template_1s2g7fp",
        data.target,
        "W_YlZRNBoMR-MsRK6"
      )
      .then(
        (result) => {
          reset();
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
          alert("Email cannot be sent at this time. Try again later");
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
          <form action="post" onSubmit={handleSubmit(sendEmail)}>
            <div className={styles.contactUsFormTextInputs}>
              <input
                id="from_name"
                name="from_name"
                className={
                  errors.from_name
                    ? styles.contactUsFormInputError
                    : styles.contactUsFormInput
                }
                type="text"
                placeholder="Your Name *"
                {...register("from_name", { required: true })}
              />
              {errors.from_name && (
                <span className={styles.contactFormError}>
                  This field is required
                </span>
              )}
              <input
                id="user_email"
                name="user_email"
                className={
                  errors.user_email
                    ? styles.contactUsFormInputError
                    : styles.contactUsFormInput
                }
                placeholder="Your Email *"
                {...register("user_email", {
                  required: true,
                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                })}
              />
              {errors.user_email?.type === "pattern" && (
                <span className={styles.contactFormError}>
                  Must enter a valid email
                </span>
              )}
              {errors.user_email?.type === "required" && (
                <span className={styles.contactFormError}>
                  This field is required
                </span>
              )}
              <input
                id="reply_to"
                name="reply_to"
                className={styles.contactUsFormInput}
                type="text"
                placeholder="Company Name"
              />
              <textarea
                className={
                  errors.message
                    ? styles.contactUsFormInputError
                    : styles.contactUsFormInput
                }
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message..."
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className={styles.contactFormError}>
                  This field is required
                </span>
              )}
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
