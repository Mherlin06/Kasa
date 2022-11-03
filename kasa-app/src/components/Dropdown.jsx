import React, { useState } from "react";

import arrow from "../assets/logo/arrow.svg";

import "../styles/Dropdown.css";

const Dropdown = ({ classes, label, content }) => {
  const [isOpen, setIsOpen] = useState(false); /** Closed by default */

  return (
    <article className={classes}>
      <button className="dd-title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{label}</h2>
        <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
      </button>
      {isOpen && (
        <div className="dd-content">
          { 
          // Check if content is an Array of Equipments or a String of Description
          content instanceof Array ?
          (
            <ul>
              {content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </article>
  );
};

export default Dropdown;
