import React from "react";
import styles from "./ServiceCard.module.css";
function ServiceCard() {
  return (
    <div className={styles.service_container}>
      <div className={styles.service_heading_container}>
        <h1 className={styles.service_heading}>Marketing Websites</h1>
      </div>
      <div className={styles.service_desc_container}>
        <h2 className={styles.service_desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, aliqua
        </h2>
      </div>
    </div>
  );
}

export default ServiceCard;
