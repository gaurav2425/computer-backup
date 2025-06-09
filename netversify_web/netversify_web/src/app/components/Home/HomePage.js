"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
// import axios from 'axios';
import AOS from "aos";
import Bar from "../Home/Bar";
import ReviewCard from "../../components/Home/ReviewCard";
import "aos/dist/aos.css";

function HomePage() {
  // const [userImages, setUserImages] = useState([]);
  const [projectCounter, setProjectCounter] = useState(0);

  function animate(initVal, lastVal, duration) {
    let startTime = null;
    const step = (currentTime = Date.now()) => {
      if (!startTime) {
        startTime = currentTime;
      }
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setProjectCounter(Math.floor(progress * (lastVal - initVal) + initVal));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };
    window.requestAnimationFrame(step);
  }

  const load = useCallback(() => {
    animate(0, 10, 2000);
  }, []);
  useEffect(() => {
    // axios.get('https://randomuser.me/api/?results=15')
    // .then((data)=>{
    //   let tempUserArray = data.data.results ?? [];
    //   setUserImages(tempUserArray);
    // }
    // )
    // .catch((err)=>{
    //   console.log("Check your internet connection or connect with the administrator");
    // });
    AOS.init({ disable: "mobile" });
    load();
  }, []);

  const data = [
    {
      question: "What services does Netversify offer?",
      ans: "Netversify specializes in web app and software development. We provide end-to-end solutions, from initial concept and design to development, testing, and deployment. Our services cater to a wide range of industries and can be tailored to meet specific business needs.",
    },
    {
      question:
        "How does Netversify ensure the quality of the software it develops?",
      ans: "Quality is a top priority at Netversify. We follow rigorous testing procedures, including unit testing, integration testing, and user acceptance testing (UAT). Our development process adheres to best practices in software engineering, such as continuous integration and continuous deployment (CI/CD). Additionally, we maintain open communication with clients to ensure that the final product meets their expectations.",
    },
    {
      question: "Does Netversify offer post-launch support for its projects?",
      ans: "Yes, Netversify provides comprehensive post-launch support, including maintenance, updates, and troubleshooting. We ensure that your web app or software remains up-to-date with the latest technologies and runs smoothly after launch.",
    },
    {
      question: "How do we approach project timelines and budgets?",
      ans: "We work closely with our clients to establish clear timelines and budgets from the outset. We provide regular updates throughout the development process and remain flexible to accommodate any changes or adjustments that may be needed.",
    },
    {
      question: "What makes your services stand out from others?",
      ans: "Our commitment to quality, transparency, and customer satisfaction sets us apart. We focus on understanding our clients' needs and delivering tailored solutions that drive results. Additionally, our team stays updated with the latest industry trends and technologies to provide innovative solutions.",
    },
    {
      question: "What is our pricing model?",
      ans: "Our pricing model is flexible and can be tailored to fit different project needs. We offer fixed-price contracts for well-defined projects and time-and-materials pricing for projects that require more flexibility. We discuss pricing in detail with our clients to ensure transparency and alignment with their budget.",
    },
  ];

  const [mydata, setMydata] = useState(data);

  return (
    <div className={styles.main_container}>
      <div className={styles.main_sub_container}>
        <div className={styles.heroContainer}>
          <div className={styles.heroData}>
            <div className={styles.logoContainer}>
              <div className={styles.blackBall}></div>
              <div className={styles.orangeBall}>
                <Image
                  src="/downArrow.png"
                  alt="down arrow"
                  height={30}
                  width={30}
                  className={styles.downArrow}
                />
              </div>
            </div>
            <div className={styles.netversify}>Netversify</div>
            <div className={styles.companyDescription}>
              <h2 className={styles.companyDescription_txt}>
                Stand out in a sea of competition with bespoke UI/UX designs
                meticulously crafted to reflect your brands unique identity.
                Leave a lasting impression on users with visually stunning and
                highly functional web applications.
              </h2>
            </div>
            <div className={styles.projectCount}>
              <h1 className={styles.project_count}> {projectCounter}</h1>
              <div>
                <span style={{ color: "#ff3f3f" }}>
                  <sup>+</sup>
                </span>
              </div>
            </div>
            <span className={styles.projectCompletedSpan}>
              Projects Completed
            </span>
          </div>
          <div className={styles.heroUsers}>
            <div className={styles.imageContainer}>
              <Image
                src="/group.png"
                className={styles.image_grp}
                // fill={true}
                width={550}
                height={400}
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <hr className={styles.topHorizontalLine} />
          <div className={styles.bannerText}>
            Transform mundane interfaces into immersive digital journeys
          </div>
          <hr className={styles.bottomHorizontalLine} />
        </div>

        <div className={styles.projectDetails}>
          <div className={styles.portfolio}>
            <div className={styles.portfolio_left}>
              <Image
                src="/img1.gif"
                alt="project discussion"
                width={200}
                height={150}
                className={styles.portfolioImage}
              />
            </div>
            <div className={styles.portfolioDescription}>
              <div className={styles.portfolioHeading}>
                <h1>Build your website or app from scratch</h1>
              </div>
              <div className={styles.portfolioSmall}>
                <p>
                  Connect with top-tier developers, web designers, and product
                  managers who can effectively showcase your business.Connect
                  with top-tier developers, web designers, and product managers
                  who can effectively showcase your business.Connect with
                  top-tier developers, web designers, and product managers who
                  can effectively showcase your business.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.portfolio}>
            <div className={styles.portfolioDescription}>
              <div className={styles.portfolioHeading}>
                <h1>Build your website or app from scratch</h1>
              </div>
              <div className={styles.portfolioSmall}>
                <p>
                  Connect with top-tier developers, web designers, and product
                  managers who can effectively showcase your business.Connect
                  with top-tier developers, web designers, and product managers
                  who can effectively showcase your business.Connect with
                  top-tier developers, web designers, and product managers who
                  can effectively showcase your business.
                </p>
              </div>
            </div>

            <div className={styles.portfolio_left}>
              <Image
                src="/img2.png"
                alt="project discussion"
                width={200}
                height={150}
                className={styles.portfolioImage}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className={styles.heading_bar}>WE KNOW WHAT YOU THINK</h1>
        </div>
        <div
          style={{
            marginTop: 30,
          }}
        >
          {mydata.map((data, index) => {
            return (
              <Bar question={data.question} ans={data.ans} key={index}></Bar>
            );
          })}
        </div>

        <div className={styles.inpireSection}>
          <div>
            <h1
              style={{
                textAlign: "center",
              }}
              className={styles.inspire_heading}
            >
              Inspiring every <br></br>kind of mind.
            </h1>
          </div>
          <div
            style={{
              width: "80%",
            }}
          >
            <p className={styles.inspire_desc}>
              Everyone has their own way of learning and expressing creativity.
              Apple technology and resources empower every kind of educator —
              and every kind of student — to learn, create and define their own
              success. Let’s move the world forward.
            </p>
          </div>
        </div>

        <div className={styles.review_Section}>
          <div
            style={{
              marginLeft: 10,
            }}
          >
            <ReviewCard></ReviewCard>
          </div>
          <div
            style={{
              marginLeft: 10,
            }}
          >
            <ReviewCard></ReviewCard>
          </div>
          <div
            style={{
              marginLeft: 10,
            }}
          >
            <ReviewCard></ReviewCard>
          </div>
          <div
            style={{
              marginLeft: 10,
            }}
          >
            <ReviewCard></ReviewCard>
          </div>
          <div
            style={{
              marginLeft: 10,
            }}
          >
            <ReviewCard></ReviewCard>
          </div>
          <div
            style={{
              marginLeft: 10,
            }}
          >
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
