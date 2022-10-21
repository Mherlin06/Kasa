import { Link } from "react-router-dom";
import "../styles/ThumbCard.css";
import { accomodationData } from "../data/accomodationData";

const ThumbCard = () => {
  return (
    <section className="thumbcards">
      {accomodationData.map((accomodation) => (
        <Link to={"/fiche-logement/" + accomodation.id} key={accomodation.id}>
          <img src={accomodation.cover} alt={accomodation.title}></img>
          <h2>{accomodation.title}</h2>
        </Link>
      ))}
    </section>
  );
};

export default ThumbCard;
