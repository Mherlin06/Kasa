import React, { useState } from "react";
import arrow from "../assets/logo/arrow.svg";

const Equipments = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <article className={props.classes}>
      <div className="dd-title">
        <h2>équipements</h2>
        <button onClick={() => setIsOpen(false)}>
          <img src={arrow} alt="flèche ouverte" className="arrow-open"></img>
        </button>
      </div>
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
      <div className="dd-title">
        <h2>équipements</h2>
        <button onClick={() => setIsOpen(true)}>
          <img src={arrow} alt="flèche fermée" className="arrow-close" ></img>
        </button>
      </div>
    </article>
  );
};

export default Equipments;
