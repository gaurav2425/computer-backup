import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceBar.module.css";
function ServiceBar() {
  return (
    <div className={styles.service_container}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <h1 className={styles.title_txt}>What we build</h1>
        </div>
        <div className={styles.header_right}>
          <h1 className={styles.view_txt}>View all</h1>
        </div>
      </div>
      <div className={styles.card_container}>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
}

export default ServiceBar;
