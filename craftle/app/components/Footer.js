// pages/footer.js

import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.brandInfo}>
          <Image
            src={require("../../public/logo.png")}
            className={styles.logo}
          ></Image>
          <Image
            src={require("../../public/logo_txt.png")}
            className={styles.logo}
          ></Image>
        </div>
        {/* <div className={styles.contactInfo}>
          <p>For designers</p>
          <p>Articles</p>
          <p>Contacts</p>
        </div> */}
        <div className={styles.contactDetails}>
          <p>Contact Us</p>
          <p>+91 9307854081</p>
          <p>craftle@gmail.com</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>Craftle© 2025 — Copyright Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
