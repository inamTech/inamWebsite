// This is the component for the certificataions section.

import React from "react";
import styles from "./Certifications.module.css";
import awsCloudCert from "../../images/aws-cert-img.png";
import comptTiaCert from "../../images/comptia-cert-img.png";
import compTiaSecurityCert from "../../images/comptia-security-plus-cert-img.png";
import popmCert from "../../images/popm-cert-img.png";

export default function Certifications() {
  return (
    <div className={styles.certificationsSection}>
      <h1 className={styles.certificationHeader}>Certifications</h1>
      <div className={styles.certificationsContainer}>
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
      </div>
    </div>
  );
}
