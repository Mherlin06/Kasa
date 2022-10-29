import React, { useState } from "react";
import arrow from "../assets/logo/arrow.svg";
import "../styles/Dropdown.css";

const Dropdown = ({classes, label, description}) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <article className={classes}>
      <button className="dd-title" onClick={() => setIsOpen(false)}>
        <h2>{label}</h2>
        <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
      </button>
      <div className="dd-content">
        <p>{description}</p>
      </div>
    </article>
  ) : (
    <article className={classes}>
      <button className="dd-title" onClick={() => setIsOpen(true)}>
        <h2>{label}</h2>
        <img src={arrow} alt="flèche fermée" className="arrow-close"></img>
      </button>
    </article>
  );
};

export default Dropdown;
