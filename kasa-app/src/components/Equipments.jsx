import React, { useState } from "react";
import arrow from "../assets/logo/arrow.svg";

const Equipments = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <article className={props.classes}>
      <button className="dd-title" onClick={() => setIsOpen(false)}>
        <h2>équipements</h2>
        <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
      </button>
      <div className="dd-content">
        <ul>
          {props.equipments.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  ) : (
    <article className={props.classes}>
      <button className="dd-title" onClick={() => setIsOpen(true)}>
        <h2>équipements</h2>
        <img src={arrow} alt="flèche fermée" className="arrow-close"></img>
      </button>
    </article>
  );
};

export default Equipments;
