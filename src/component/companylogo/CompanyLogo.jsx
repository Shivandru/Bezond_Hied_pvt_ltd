import React from "react";
import styles from "./CompanyLogo.module.css"
import BeZond_Image from "../../images/BEZOND_LOGO.png";

function CompanyLogo() {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.companyImage}
        src={BeZond_Image}
        alt="company_logo"
      />
    </div>
  );
}

export default CompanyLogo;
