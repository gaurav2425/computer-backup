// pages/reviews.js

import styles from "./Reviews.module.css";

const reviews = [
  {
    name: "John Doe",
    text: "This is a fantastic product! Highly recommend it to everyone.This is a fantastic product! Highly recommend it to everyone",
    rating: 5,
  },
  {
    name: "Jane Smith",
    text: "Great experience, fast delivery, and excellent quality.",
    rating: 4,
  },
  {
    name: "Alex Johnson",
    text: "Okay service, but could be improved in some areas.",
    rating: 3,
  },
  {
    name: "Emily Davis",
    text: "Not satisfied with the product. Will not be purchasing again.",
    rating: 2,
  },
  {
    name: "Jane Smith",
    text: "Great experience, fast delivery, and excellent quality.",
    rating: 4,
  },
  {
    name: "Alex Johnson",
    text: "Okay service, but could be improved in some areas.",
    rating: 3,
  },
  {
    name: "Emily Davis",
    text: "Not satisfied with the product. Will not be purchasing again.",
    rating: 2,
  },
  {
    name: "Jane Smith",
    text: "Great experience, fast delivery, and excellent quality.",
    rating: 4,
  },
  {
    name: "Alex Johnson",
    text: "Okay service, but could be improved in some areas.",
    rating: 3,
  },
  {
    name: "Emily Davis",
    text: "Not satisfied with the product. Will not be purchasing again.",
    rating: 2,
  },
];

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h2>Customer Reviews</h2>
      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
            <div className={styles.rating}>{"⭐".repeat(review.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
