import React from "react";
import { useState } from "react";
import "../styles/Carousel.css";
import leftArrow from "../assets/logo/left-arrow.svg";
import rightArrow from "../assets/logo/right-arrow.svg";

const Carousel = ({ pictures }) => {
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

  return (
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
      <img
        src={rightArrow}
        alt="flèche droite"
        className="carousel-arrow"
        onClick={goToNext}
      ></img>
    </div>
  );
};

export default Carousel;
