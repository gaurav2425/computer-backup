import React, { useState } from "react";
import styles from "../../styles/componentstyles/designcard.module.css";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";
import PortfolioImg from "../../public/assets/parallax1.png";
function DesignCard() {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.card_img}>
        {/* <Image
          src={"/assets/portfolio.png"}
          width={200}
          height={350}
          className={styles.card_img}
          alt="Example"
        ></Image> */}

        <div
          style={{
            border: "1px solid black",
          }}
        >
          <img
            src="/assets/portfolio.png"
            alt="react logo"
            className={styles.card_img}
          />
        </div>
      </div>
      <div
        className={styles.card_btn}
        // className={`${styles.fill_button} ${hovered ? "filled" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <h1 className={styles.project_link}>Project Link</h1>
        <LaunchIcon
          fontSize="20px"
          style={{
            // color: "#fff",
            marginLeft: 10,
          }}
        ></LaunchIcon>
      </div>
    </div>
  );
}

export default DesignCard;
