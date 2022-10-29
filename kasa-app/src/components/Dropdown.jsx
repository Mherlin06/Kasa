import React, { useState } from "react";
import arrow from "../assets/logo/arrow.svg";
import "../styles/Dropdown.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <article className={props.classes}>
      <button className="dd-title" onClick={() => setIsOpen(false)}>
        <h2>{props.label}</h2>
        <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
      </button>
      <div className="dd-content">
        <p>{props.description}</p>
      </div>
    </article>
  ) : (
    <article className={props.classes}>
      <button className="dd-title" onClick={() => setIsOpen(true)}>
        <h2>{props.label}</h2>
        <img src={arrow} alt="flèche fermée" className="arrow-close"></img>
      </button>
    </article>
  );
};

export default Dropdown;
