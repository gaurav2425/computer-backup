import Marquee from "react-fast-marquee";
import Image from "next/image"; // Import next/image for optimized images
import styles from "./ImageGallery.module.css";

// Array of image file names from the public folder
const imageFiles = [
  {
    imgSrc: "img1.png",
  },
  {
    imgSrc: "img2.png",
  },
  {
    imgSrc: "img3.png",
  },
  {
    imgSrc: "img4.png",
  },
  {
    imgSrc: "img5.png",
  },
  {
    imgSrc: "img6.png",
  },
];

const ImageGallery = ({ direction }) => {
  return (
    <div className={styles.testimonialContainer}>
      <Marquee
        pauseOnHover
        speed={50}
        direction={direction}
        className={styles.marquee_strip}
      >
        {imageFiles.map((image, index) => (
          <div key={index} className={styles.cityCard}>
            {/* Correct path reference for images */}
            <Image
              src={`/${image.imgSrc}`} // Correct path relative to the public folder
              alt={`Image ${index + 1}`}
              width={400} // Specify the width
              height={250} // Specify the height
              className={styles.cityImage}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageGallery;
