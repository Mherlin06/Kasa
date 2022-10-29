import React from "react";
import redStar from "../assets/logo/red-star.svg";
import grayStar from "../assets/logo/gray-star.svg";
import "../styles/Rating.css";

const rangeRating = [1, 2, 3, 4, 5];

const Rating = ({ rate }) => {
  return (
    <section className="rating">
      {rangeRating.map((ratingValue) =>
        rate >= ratingValue ? (
          <span className="star" key={ratingValue.toString()}>
            <img src={redStar} alt="étoile rouge"></img>
          </span>
        ) : (
          <span className="star" key={ratingValue.toString()}>
            <img src={grayStar} alt="étoile grise"></img>
          </span>
        )
      )}
    </section>
  );
};

export default Rating;
