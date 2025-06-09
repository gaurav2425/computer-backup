import styles from "../../styles/componentstyles/Navbar.module.css";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
function Navbar({ scrollToElement }) {
  const router = useRouter();
  const [selected, setSelected] = useState("home");
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_left}>
        <h1>Dev Gaurav</h1>
      </div>

      <div className={styles.navbar_right}>
        <ul>
          <li
            className={selected == "home" ? styles.selected : ""}
            onClick={() => {
              setSelected("home");
              scrollToElement();
            }}
          >
            HOME
          </li>
          <li
            className={selected == "uiux" ? styles.selected : ""}
            onClick={() => {
              setSelected("uiux");
              scrollToElement();
            }}
          >
            UI/UX Designs
          </li>
          <li
            className={selected == "experiences" ? styles.selected : ""}
            onClick={() => {
              setSelected("experiences");
            }}
          >
            Experiences
          </li>
          <li
            className={selected == "projects" ? styles.selected : ""}
            onClick={() => {
              setSelected("projects");
            }}
          >
            Projects
          </li>
        </ul>
      </div>

      <div className={styles.navbar_right_icon}>
        <IconButton
          onclick={() => {
            console.log("Hello");
          }}
        >
          <DragHandleIcon
            style={{ width: "40px", height: "40px", color: "#000000" }}
          ></DragHandleIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
