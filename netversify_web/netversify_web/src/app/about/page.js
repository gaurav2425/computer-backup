"use client";
import { useState, useEffect } from "react";
import styles from "./Articles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ArticleLarge from "./ArticleLarge";
import ArticleCard from "./ArticleCard";
import Footer from "../components/Footer";
import Navbar from "../components/Home/Navbar";
function Articles() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={styles.articles_page}>
      <Navbar></Navbar>
      <div className={styles.text_container}>
        <h1 className={styles.text1} data-aos="fade-up">
          Netversify and Articles
        </h1>
        <h1 className={styles.text2} data-aos="fade-up">
          Inspiring every kind of mind.
        </h1>
        <p className={styles.textp} data-aos="fade-up">
          Everyone has their own way of learning and expressing creativity.
          Netversify technology and resources empower every kind of educator —
          and every kind of student — to learn, create and define their own
          success. Let’s move the world forward.
        </p>
      </div>

      <div className={styles.article_large_container}>
        <ArticleLarge></ArticleLarge>
      </div>

      <div className={styles.article_container}>
        <div className={styles.article_container_sub}>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
        </div>
      </div>

      {/* <div className={styles.btn_container}>
        <h1 className={styles.btn_container_txt}>Load More</h1>
      </div> */}

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Articles;
