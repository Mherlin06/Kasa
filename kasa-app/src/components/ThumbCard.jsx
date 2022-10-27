import { Link } from "react-router-dom";
import { getAccomodations } from "../data/accomodationData";
import "../styles/ThumbCard.css";

const ThumbCard = () => {
  const accomodations = getAccomodations();

  return (
    <section className="thumbcards">
      {accomodations.map((accomodation) => (
        <Link to={"/fiche-logement/" + accomodation.id} key={accomodation.id}>
          <img src={accomodation.cover} alt={accomodation.title}></img>
          <h2>{accomodation.title}</h2>
        </Link>
      ))}
    </section>
  );
};

export default ThumbCard;
