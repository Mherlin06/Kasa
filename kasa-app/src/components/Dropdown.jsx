import React, { useState } from "react";
import arrow from "../assets/logo/arrow.svg";
import "../styles/Dropdown.css";

const Dropdown = ({ classes, label, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return isOpen ? (
    <article className={classes}>
      <button className="dd-title" onClick={() => setIsOpen(false)}>
        <h2>{label}</h2>
        <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
      </button>
      {content instanceof Array ? (
        <div className="dd-content">
          <ul>
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="dd-content">
          <p>{content}</p>
        </div>
      )}
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
