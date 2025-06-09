import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import styles from "../../styles/componentstyles/SocialIcons.module.css";
import { Link } from "@mui/material";
function SocialIcons() {
  return (
    <div className={styles.social_icons}>
      <Tooltip title="Instagram" arrow={true} placement="top">
        <Link href="https://github.com/gaurav2425">
          <IconButton style={{ marginLeft: "0px" }}>
            <InstagramIcon className={styles.instagram_icon} />
          </IconButton>
        </Link>
      </Tooltip>

      <Tooltip title="Linkedin" arrow={true} placement="top">
        <Link href="https://www.linkedin.com/in/gaurav-burande-9a12691b4/">
          <IconButton style={{ marginLeft: "0px" }}>
            <LinkedInIcon className={styles.linkedin_icon} />
          </IconButton>
        </Link>
      </Tooltip>

      <Tooltip title="Whatsapp" arrow={true} placement="top">
        <Link href="https://github.com/gaurav2425">
          <IconButton style={{ marginLeft: "0px" }}>
            <WhatsAppIcon className={styles.whatsapp_icon} />
          </IconButton>
        </Link>
      </Tooltip>

      <Tooltip title="Twitter" arrow={true} placement="top">
        <Link href="https://github.com/gaurav2425">
          <IconButton style={{ marginLeft: "0px" }}>
            <TwitterIcon className={styles.twitter_icon} />
          </IconButton>
        </Link>
      </Tooltip>

      <Tooltip title="Email" arrow={true} placement="top">
        <Link href="https://github.com/gaurav2425">
          <IconButton style={{ marginLeft: "0px" }}>
            <AlternateEmailIcon className={styles.email_icon} />
          </IconButton>
        </Link>
      </Tooltip>

      <Tooltip title="Github" arrow={true} placement="top">
        <Link href="https://github.com/gaurav2425">
          <IconButton style={{ marginLeft: "0px" }}>
            <GitHubIcon className={styles.github_icon} />
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
}

export default SocialIcons;
