import React, { useState } from "react";
import arrow from "../assets/logo/arrow.svg";
import "../styles/Dropdown.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <article className="dropdown">
      <div className="dd-title">
        <h2>Titre</h2>
        <button onClick={() => setIsOpen(false)}>
          <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
        </button>
      </div>
      <div className="dd-content">
        <p>lorem10</p>
      </div>
    </article>
  ) : (
    <article className="dropdown">
      <div className="dd-title">
        <h2>Titre</h2>
        <button onClick={() => setIsOpen(true)}>
          <img src={arrow} alt="flèche fermée" className="arrow-close"></img>
        </button>
      </div>
    </article>
  );
};

export default Dropdown;
