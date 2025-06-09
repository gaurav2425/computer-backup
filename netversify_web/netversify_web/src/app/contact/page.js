import React from "react";
import styles from "./Contact.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Home/Navbar";
function Contact() {
  return (
    <div className={styles.contact_container}>
      <Navbar></Navbar>
      <div
        style={{
          padding: "2%",
          paddingTop: "50px",
          paddingBottom: "100px",
        }}
      >
        <div className={styles.heading_container}>
          <h2 className={styles.heading_container_title}>/Get In Touch</h2>
          <h1 className={styles.heading_container_desc}>Schedule a call</h1>
        </div>
        <div>
          <div className={styles.container1}>
            <h1 className={styles.container1txt1}>Hey my name is</h1>
            <input
              placeholder="Type Here"
              className={styles.container1input1}
            ></input>
            <h1 className={styles.container1txt2}>and I’m Looking for</h1>
            <select className={styles.dropdownList} defaultValue="select">
              <option value="select" disabled>
                Select an option
              </option>
              <option value="web only">Website Development</option>
              <option value="android only">
                Android Application Development
              </option>
              <option value="iOS only">iOS Application Development</option>
              <option value="mob and web">Mobile + Web Package</option>
              <option value="android + iOS">
                All mobile devices app (Android + iOS)
              </option>
              <option value="desktop">Desktop Software</option>
              <option value="chrome">Chrome Extension</option>
              <option value="allInOne">All-in-One Package</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.container2}>
            <h1 className={styles.container2txt1}>Get in Touch with me at</h1>
            <input
              placeholder="Your Email I’D Here"
              className={styles.container2input2}
            ></input>
            <h1
              style={{
                color: "#000",
              }}
            >
              !
            </h1>
          </div>

          <div className={styles.container3}>
            <h1 className={styles.container3txt1}>Write a Short Message</h1>
            <input
              placeholder="I am writing this ... "
              className={styles.container3input1}
            ></input>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.btn}>Send Enquiry</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
