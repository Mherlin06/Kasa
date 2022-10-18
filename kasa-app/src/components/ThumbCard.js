import { Link } from "react-router-dom";
import "../styles/ThumbCard.css";
import { accomodationList } from "../data/accomodationList";

const ThumbCard = () => {
  return (
    <section className="thumbcards">
      {accomodationList.map((accomodation) => (
        <Link to="/fiche-logement/" key={accomodation.id}>
          <img src={accomodation.cover} alt={accomodation.title}></img>
          <h2>{accomodation.title}</h2>
        </Link>
      ))}
    </section>
  );
};

export default ThumbCard;
