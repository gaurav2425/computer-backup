import React from "react";
import styles from "../../styles/componentstyles/Footer.module.css";
import { AccessAlarm } from "@mui/icons-material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className={styles.footer_container}>
      {/* <img
        src="https://i.ibb.co/VSyWs0z/Rectangle-44-1.png"
        className={styles.img}
      ></img> */}
      <div className={styles.overlay}>{/* <h1>hello</h1> */}</div>
      <div className={styles.footer_container_left}>
        <h1>Let's Work Together</h1>
      </div>

      <div className={styles.footer_container_right}>
        <p>
          I am a highly proficient full-stack application developer with
          extensive experience in building powerful, scalable, and user-focused
          applications. My skill set covers the entire development process, from
          designing engaging, intuitive front-end interfaces to constructing
          reliable, high-performance back-end systems. I’m adept at working with
          a variety of technologies and frameworks, enabling me to deliver
          complete, end-to-end solutions that meet both business needs and user
          expectations. I excel at problem-solving and optimizing code for speed
          and efficiency, always aiming to exceed project goals.
          <br></br>
          My approach is grounded in a deep understanding of both technical and
          user-centric principles, allowing me to bridge the gap between complex
          backend processes and smooth, responsive user interfaces. With a
          strong commitment to quality and innovation, I create applications
          that are not only functional and efficient but also provide an
          exceptional user experience. My work is driven by a passion for
          technology and a relentless pursuit of excellence in every project I
          undertake.
        </p>
        <h1 className={styles.connect_social}>Connect Social</h1>

        <div className={styles.social_icons}>
          <AlternateEmailIcon
            size={40}
            style={{ width: "40px", height: "40px" }}
            className={styles.email_icon}
          ></AlternateEmailIcon>
          <TwitterIcon
            style={{ width: "40px", height: "40px", marginLeft: "10px" }}
            className={styles.twitter_icon}
          ></TwitterIcon>
          <LinkedInIcon
            style={{ width: "40px", height: "40px", marginLeft: "10px" }}
            className={styles.linkedin_icon}
          ></LinkedInIcon>
          <InstagramIcon
            style={{ width: "40px", height: "40px", marginLeft: "10px" }}
            className={styles.instagram_icon}
          ></InstagramIcon>
        </div>
      </div>
    </div>
  );
}

export default Footer;
