import React from "react";
import { useState } from "react";

import "../styles/Carousel.css";

import leftArrow from "../assets/logo/left-arrow.svg";
import rightArrow from "../assets/logo/right-arrow.svg";

const Carousel = ({ pictures }) => {
  const isMultiplePictures = pictures.length > 1; /** Check if there are more than 1 pictures */
  const [currentIndex, setCurretIndex] = useState(0);

  const goToNext = () => {
    const isLastImage = currentIndex === pictures.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurretIndex(newIndex);
  };

  const goToPrevious = () => {
    const isfirstImage = currentIndex === 0;
    const newIndex = isfirstImage ? pictures.length - 1 : currentIndex - 1;
    setCurretIndex(newIndex);
  };

  return isMultiplePictures ? (
    <div
      style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      className="carousel"
    >
      <img
        src={leftArrow}
        alt="flèche gauche"
        className="carousel-arrow"
        onClick={goToPrevious}
      ></img>
      <span className="carousel-index">
        {currentIndex + 1}/{pictures.length}
      </span>
      <img
        src={rightArrow}
        alt="flèche droite"
        className="carousel-arrow"
        onClick={goToNext}
      ></img>
    </div>
  ) : (
    <div
      style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      className="carousel"
    ></div>
  );
};

export default Carousel;
