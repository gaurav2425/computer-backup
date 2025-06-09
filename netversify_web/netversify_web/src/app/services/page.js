import React from "react";
import styles from "./Service.module.css";
import ServiceBar from "../components/services/ServiceBar";
import Footer from "../components/Footer";
import Navbar from "../components/Home/Navbar";
function Service() {
  return (
    <div className={styles.service_container}>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <h1 className={styles.service_heading}>Services</h1>
      </div>
      <div className={styles.servicebar_container}>
        <ServiceBar></ServiceBar>
        <ServiceBar></ServiceBar>
        <ServiceBar></ServiceBar>
        <ServiceBar></ServiceBar>
        <ServiceBar></ServiceBar>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Service;
