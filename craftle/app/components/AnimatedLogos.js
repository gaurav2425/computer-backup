// pages/AnimatedLogos.js

import styles from "./AnimatedLogos.module.css";

const AnimatedLogos = () => {
  return (
    <section className={styles.animationContainer}>
      <div className={styles.circle}>
        <div className={styles.logo} style={{ animationDelay: "0s" }}>
          <img src="/valentines.png" alt="Logo 1" />
        </div>
        <div className={styles.logo} style={{ animationDelay: "2s" }}>
          <img src="/valentines.png" alt="Logo 1" />
        </div>
        <div className={styles.logo} style={{ animationDelay: "4s" }}>
          <img src="/valentines.png" alt="Logo 1" />
        </div>
        <div className={styles.logo} style={{ animationDelay: "6s" }}>
          <img src="/valentines.png" alt="Logo 1" />
        </div>
        <div className={styles.logo} style={{ animationDelay: "8s" }}>
          <img src="/valentines.png" alt="Logo 1" />
        </div>
      </div>
    </section>
  );
};

export default AnimatedLogos;
