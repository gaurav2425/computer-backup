import React from "react";
import styles from "../styles/designs.module.css";
import DesignCard from "./components/DesignCard";
function Designs() {
  const timesToRender = Array.from({ length: 3 });
  return (
    <div>
      <div className={styles.title_container}>
        <div className={styles.title}>
          <h1>Designs</h1>
          <div className={styles.title_border}></div>
        </div>
      </div>

      <div className={styles.design_cards}>
        {timesToRender.map((_, index) => (
          <div
            key={index}
            style={{
              width: "33.33%",
              // background: "red",
              alignItems: "center",
              justifyContent: "center",
              // border: "1px solid red",
            }}
          >
            <DesignCard></DesignCard>
          </div>
        ))}

        {/* <DesignCard></DesignCard> */}
      </div>
    </div>
  );
}

export default Designs;
