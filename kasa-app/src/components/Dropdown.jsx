import React, { useState } from "react";

import arrow from "../assets/logo/arrow.svg";

import "../styles/Dropdown.css";

const Dropdown = ({ classes, label, content }) => {
  const [isOpen, setIsOpen] = useState(false); /** Closed by default */

  return isOpen ? (
    <article className={classes}>
      <button className="dd-title" onClick={() => setIsOpen(false)}>
        <h2>{label}</h2>
        <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
      </button>
      <div className="dd-content">
        {content instanceof Array ? (  /** Check if content is an Array or String */
          <ul>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
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
