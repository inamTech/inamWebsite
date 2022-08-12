// This is the component for the certificataions section.

import React from "react";
import styles from "./Certifications.module.css";
import awsCloudCert from "../../images/aws-cert-img.png";
import comptTiaCert from "../../images/comptia-cert-img.png";
import compTiaSecurityCert from "../../images/comptia-security-plus-cert-img.png";
import popmCert from "../../images/popm-cert-img.png";
import pmpCert from "../../images/pmp-cert-img.png";

export default function Certifications() {
  return (
    <div className={styles.certificationsSection}>
      <h1 className={styles.certificationHeader}>Certifications</h1>
      <div className={styles.certificationsContainer}>
        {/* <div className={styles.test}>
          <p>Hellow World</p>
        </div>
        <div className={styles.test}>
          <p>Hellow World</p>
        </div>
        <div className={styles.test}>
          <p>Hellow World</p>
        </div>
        <div className={styles.test}>
          <p>Hellow World</p>
        </div>
        <div className={styles.test}>
          <p>Hellow World</p>
        </div> */}
        <img
          className={styles.certificationIcon}
          src={awsCloudCert}
          alt="Amazon Web Services Cloud Computing certificate."
        />
        <img
          className={styles.certificationIcon}
          src={comptTiaCert}
          alt="Computer I.T. certificate"
        />
        <img
          className={styles.certificationIcon}
          src={compTiaSecurityCert}
          alt="Computer I.T. Security Plus certificate"
        />
        <img
          className={styles.certificationIcon}
          src={popmCert}
          alt="Project Management certificate."
        />
        <img
          className={styles.lastCert}
          src={pmpCert}
          alt="Project Management Professional certificate."
        />
      </div>
    </div>
  );
}
