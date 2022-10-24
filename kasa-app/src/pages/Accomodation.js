import React from "react";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import HostCard from "../components/HostCard";
import Dropdown from "../components/Dropdown";
import Equipments from "../components/Equipments";

const Accomodation = () => {
  return (
    <main>
      <Carousel />
      <section className="accomodation-infos">
        <div className="title-card">
          <h1>Titre</h1>
          <h2>lieux</h2>
          <div className="tags">
            <Tag />
          </div>
        </div>
        <div className="host-rating">
          <Rating />
          <HostCard />
        </div>
      </section>
      <section className="accomodation-dropdown">
        <Dropdown label="Description" description="lorem15" classes="dropdown"/>
        <Equipments />
      </section>
    </main>
  );
};
export default Accomodation;
