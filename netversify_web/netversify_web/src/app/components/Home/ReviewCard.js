import React from "react";
import styles from "../../components/Home/ReviewCard.module.css";
import StarIcon from "@mui/icons-material/Star";
function ReviewCard() {
  return (
    <div className={styles.review_card}>
      <div>
        <p className={styles.card_txt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, aliqua Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, aliqua Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, aliqua
        </p>
      </div>
      <div></div>
      <div>Ratings</div>
      <div className={styles.rating_container}>
        <StarIcon fontSize="medium" className={styles.star_icon}></StarIcon>
        <StarIcon fontSize="medium" className={styles.star_icon}></StarIcon>
        <StarIcon fontSize="medium" className={styles.star_icon}></StarIcon>
        <StarIcon fontSize="medium" className={styles.star_icon}></StarIcon>
        <StarIcon fontSize="medium" className={styles.star_icon}></StarIcon>
      </div>
      <div className={styles.name_container}>
        <div className={styles.profile_container}></div>
        <div className={styles.name_container}>
          <h2 className={styles.name_txt}>Gaurav</h2>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
