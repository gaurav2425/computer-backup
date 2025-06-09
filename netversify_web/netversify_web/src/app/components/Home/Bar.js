import React, { useState } from "react";
import styles from "../../styles/Bar.module.css";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
function Bar({ question, ans }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_sub_container}>
        <div
          className={styles.bar_heading_container}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <h1
            style={{
              fontSize: 22,
            }}
          >
            {question}
          </h1>
          {open == false ? (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
              className={styles.add_iconbutton}
            >
              <AddIcon
                className={styles.add_icon}
                style={{ color: "#000" }}
              ></AddIcon>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
              className={styles.remove_iconbutton}
            >
              <RemoveIcon
                className={styles.add_icon}
                style={{ color: "#000" }}
              ></RemoveIcon>
            </IconButton>
          )}
        </div>

        {open ? (
          <div>
            <p style={{ marginLeft: "10px", color: "#000" }}>{ans}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* <div>Plus</div> */}
    </div>
  );
}

export default Bar;
