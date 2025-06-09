import React from "react";
import styles from "./ArticleLarge.module.css";
import Image from "next/image";
function ArticleLarge() {
  return (
    <div className={styles.article_large_container}>
      <div className={styles.article_large_container_left}>
        {/* <Image src="/twitter.png" className={styles.image} fill={true}></Image> */}
      </div>
      <div className={styles.article_large_container_right}>
        <div className={styles.article_large_container_right_txt}>
          <h1>A New Wave of Updates (Get it?)</h1>
          <p className={styles.article_large_container_right_para}>
            Hey, quick question 👋 Where’s the best spot in your area that has
            the most buttery and sweetest caramel drizzled popcorn? Asking for
            a...
          </p>

          <p className={styles.read_more}>Read More {">>"}</p>

          <h2>March 15, 2022</h2>
        </div>
      </div>
    </div>
  );
}

export default ArticleLarge;
