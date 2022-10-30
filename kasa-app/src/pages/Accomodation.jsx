import React from "react";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import HostCard from "../components/HostCard";
import Dropdown from "../components/Dropdown";
import { getAccomodation } from "../data/accomodationData";
import { useParams } from "react-router-dom";
import "../styles/Accomodation.css";

const Accomodation = () => {
  const params = useParams();
  const accomodation = getAccomodation(params.id);

  return (
    <main>
      <Carousel pictures={accomodation.pictures} />
      <section className="accomodation-infos">
        <div className="title-card">
          <h1>{accomodation.title}</h1>
          <h2>{accomodation.location}</h2>
          <ul className="tags">
            {accomodation.tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </ul>
        </div>
        <div className="host-rating">
          <Rating rate={accomodation.rating} />
          <HostCard
            hostName={accomodation.host.name}
            picture={accomodation.host.picture}
          />
        </div>
      </section>
      <section className="accomodation-dropdown-section">
        <Dropdown
          label="Description"
          content={accomodation.description}
          classes="dropdown accomodation-dropdown"
        />
        <Dropdown
          label="Equipements"
          classes="dropdown accomodation-dropdown"
          content={accomodation.equipments}
        />
      </section>
    </main>
  );
};
export default Accomodation;
