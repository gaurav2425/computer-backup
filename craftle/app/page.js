import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import Reviews from "./components/Reviews";
import CustomSection from "./components/CustomSection";
import { RightArrow } from "./svg/Svg";
import AnimatedLogos from "./components/AnimatedLogos";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.heading}>
            Crafting Timeless <br></br>Themes for Iconic Brands
          </h1>
          <p className={styles.description}>
            "We understand that your logo is more than just an image; it’s the
            face of your brand. Our expert designers work closely with you to
            create logos that are both creative and meaningful, helping you
            connect with your audience.",A great logo is the cornerstone of any
            brand. Our team of skilled designers is dedicated to creating logos
            that are visually appealing, versatile, and impactful. Explore our
            portfolio to see how we’ve helped businesses elevate their brand
            image.
          </p>
          {/* Updated button with mailto link to Gmail */}
          <a
            href="mailto:youremail@gmail.com?subject=Logo Request"
            className={styles.createBtn}
          >
            <span>Create for me</span>
            <div className={styles.createBtn_arrow}>
              <RightArrow></RightArrow>
            </div>
          </a>
          <Image src={require("../public/hero_image.png")}></Image>
        </section>

        {/* <section>
          <AnimatedLogos></AnimatedLogos>
        </section> */}

        <section className={styles.image_strip}>
          <ImageGallery direction={"left"} />
          <ImageGallery direction={"right"} />
        </section>
        <section>
          <CustomSection></CustomSection>
        </section>
        <section className={styles.info_description_section}>
          <Reviews></Reviews>
        </section>

        <section className={styles.descriptionSection}>
          <h1 className={styles.heading}>
            Seasonal & Themed Logos <br></br>Design That Celebrates Every
            Occasion
          </h1>
          <p className={styles.description}>
            "At craftle, we create custom logos that bring the magic of each
            season and celebration to life. From Christmas to Halloween,
            Valentine's Day to Easter, our designs are crafted to perfectly
            match the theme of your event or brand. We believe a great logo not
            only defines your identity but also connects with your audience on a
            deeper level. Whether you're launching a seasonal campaign or just
            looking to add some festive flair to your brand, our themed logos
            are designed to make your brand memorable and meaningful. Let us
            help you stand out with a logo that embodies the spirit of your
            celebration."
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
