// pages/CustomSection.js

import Image from "next/image";
import styles from "./CustomSection.module.css";

const CustomSection = () => {
  return (
    <section className={styles.customSection}>
      <div className={styles.imageContainer}>
        <Image
          src={require("../../public/valentines.png")}
          className={styles.image}
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Custom themes <br></br>for Every Occasion!
        </h2>
        <p className={styles.description}>
          "At [Agency Name], we specialize in creating custom logos, banners,
          and videos tailored to the theme of any occasion. Whether you're
          celebrating a holiday, special event, or milestone, our designs help
          bring your vision to life. From eye-catching logos to dynamic banners
          and themed videos, we ensure every element aligns perfectly with your
          celebration. Let us craft the perfect visual identity that captures
          the spirit of your event and makes it unforgettable."
        </p>
      </div>
    </section>
  );
};

export default CustomSection;
