import React, { useEffect, useRef } from "react";
import styles from "../styles/Welcomepage.module.css";
// import MyImg from "../assets/myimg.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Bar from "./components/Bar";
import ExperienceData from "../JsonData/Experiences.json";
import ProjectData from "../JsonData/Projects.json";
import SocialIcons from "./components/SocialIcons";
import Parallax1 from "./components/Parallax1";
import Parallax2 from "./components/Parallax2";
import Designs from "./Designs";
import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

function RetroComputer() {
  const gltf = useGLTF("/models/retro_computer/scene.gltf"); // Adjust the path

  const Part1_baseColor = useLoader(
    THREE.TextureLoader,
    "/models/retro_computer/textures/Part1_baseColor.png"
  );
  const Part1_emissive = useLoader(
    THREE.TextureLoader,
    "/models/retro_computer/textures/Part1_emissive.jpeg"
  );
  const Part1_metallicRoughness = useLoader(
    THREE.TextureLoader,
    "/models/retro_computer/textures/Part1_metallicRoughness.png"
  );

  const Part1_normal = useLoader(
    THREE.TextureLoader,
    "/models/retro_computer/textures/Part1_normal.png"
  );
  const Part2_baseColor = useLoader(
    THREE.TextureLoader,
    "/models/retro_computer/textures/Part2_baseColor.png"
  );
  const Part2_emissive = useLoader(
    THREE.TextureLoader,
    "/models/retro_computer/textures/Part2_emissive.jpeg"
  );
  const Part2_metallicRoughness = useLoader(
    THREE.TextureLoader,

    "/models/retro_computer/textures/Part2_metallicRoughness.png"
  );
  const texture = new THREE.TextureLoader().load(
    "/models/retro_computer/textures/Part1_baseColor.png"
  );

  const Part2_normal = useLoader(
    THREE.TextureLoader,
    "/models/retro_computer/textures/Part2_normal.png"
  );

  gltf.scene.traverse((child) => {
    // console.log("child.isMesh", child.isMesh, child);
    if (child.isMesh) {
      console.log("child.isMesh", child.isMesh, child);
    }

    if (child.isMesh) {
      if (child.name.includes("defaultMaterial_1")) {
        child.material.map = Part2_normal; // Assign screen texture
      } else if (child.name.includes("defaultMaterial")) {
        child.material.map = Part2_normal; // Assign keyboard texture
      }

      // console.log("child.name", child.name);
      // child.material.map = screenTexture;
      // child.material.map = keyboardTexture;
      // child.material.map = bodyTexture;
      // child.material.map = screenTexture1;
      // child.material.map = keyboardTexture1;
      // child.material.map = bodyTexture1;
      // child.material.map = bodyTexturemetallic;
      // child.material.map = normal;
      // child.material.map = screenTexture;

      // if (child.name.includes("Screen")) {
      //   child.material.map = screenTexture; // Assign texture to Screen
      // } else if (child.name.includes("Keyboard")) {
      //   child.material.map = keyboardTexture; // Assign texture to Keyboard
      // } else if (child.name.includes("Body")) {
      //   child.material.map = bodyTexture; // Assign texture to Body
      // }
    }
  });

  return <primitive object={gltf.scene} scale={1} />;
}

// const Cube = () => {
//   const textures = useLoader(THREE.TextureLoader, [
//     "/models/retro_computer/textures/Part1_baseColor.png", // Replace with the paths to your textures
//     "/models/retro_computer/textures/Part1_emissive.jpeg",
//     "/models/retro_computer/textures/Part1_metallicRoughness.png",
//     "/models/retro_computer/textures/Part2_baseColor.png",
//     "/models/retro_computer/textures/Part2_normal.png",
//     "/models/retro_computer/textures/Part2_baseColor.png",
//   ]);

//   return (
//     <mesh>
//       <boxGeometry args={[1, 1, 1]} />
//       {textures.map((texture, index) => (
//         <meshStandardMaterial
//           key={index}
//           attach={`material-${index}`}
//           map={texture}
//         />
//       ))}
//     </mesh>
//   );
// };

// const TexturedCube = () => {
//   // Load textures for all six sides
//   const textures = useLoader(THREE.TextureLoader, [
//     "/models/retro_computer/textures/Part1_baseColor.png",
//     "/models/retro_computer/textures/Part1_emissive.jpeg",
//     "/models/retro_computer/textures/Part1_metallicRoughness.png",
//     "/models/retro_computer/textures/Part2_baseColor.png",
//     "/models/retro_computer/textures/Part2_normal.png",
//     "/models/retro_computer/textures/Part2_baseColor.png",
//   ]);

//   return (
//     <mesh>
//       {/* Cube geometry */}
//       <boxGeometry args={[1, 1, 1]} />
//       {/* Apply textures to each side */}
//       {textures.map((texture, index) => (
//         <meshStandardMaterial
//           key={index}
//           attach={`material-${index}`}
//           map={texture}
//         />
//       ))}
//     </mesh>
//   );
// };

function WelcomePage() {
  const scrollToRef = useRef(null);

  const scrollToElement = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Navbar scrollToElement={scrollToElement}></Navbar>

      <div className={styles.intro_container}>
        <div className={styles.intro_container_sub}>
          <div className={styles.intro_left_container}>
            <h1
              // data-aos="flip-up"
              style={{
                color: "black",
              }}
            >
              Talks about<span className={styles.design_span}>"Design",</span>
            </h1>
            <h1>
              <span className={styles.tech_span}>Tech</span>,
              <span className={styles.product_span}> Product</span>
            </h1>

            <p data-aos="zoom-in" className={styles.description_welcome}>
              As a full stack developer, I have a wide range of skills and
              knowledge that allow you to work on both the front-end and
              back-end of a website and application. This includes proficiency
              in languages such as HTML, CSS, JavaScript for the front-end, as
              well as languages like Node js, for the back-end. I also have
              knowledge of databases, server-side technologies, and web
              architecture. You are able to design, build, and maintain a
              complete web application. Additionally, I have knowledge of and
              experience with several development tools such as Git, Github and
              Figma. I am a developer who can work on different project and
              technologies
            </p>

            <div>
              <SocialIcons></SocialIcons>
            </div>
          </div>

          <div className={styles.intro_right_container}>
            <img
              src="/assets/myimg.jpeg"
              alt="react logo"
              className={styles.intro_right_container_img}
            />
          </div>
        </div>
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Experiences</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
              summery={exp.summery}
            ></Bar>
          );
        })}
      </div>

      <div className={styles.design_section} ref={scrollToRef}>
        <Designs></Designs>
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Volunterring</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <Parallax1></Parallax1>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Projects</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ProjectData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Volunterring</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <Parallax2></Parallax2>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Volunterring</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Tech Stack</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {/* {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })} */}
      </div>

      <div className={styles.buttons_container_main}>
        <div className={styles.buttons_container}>
          <button className={styles.hire_me_btn}>Hire Me</button>
          <button className={styles.resume_download_btn}>
            Download Resume
          </button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default WelcomePage;
