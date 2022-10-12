import "../styles/ThumbCard.css";
import { locationList } from "../data/locationList";

const ThumbCard = () => {
  return (
    <section className="thumbcard">
      {locationList.map((location) => (
        <a href="#" key={location.id}>
          <img
            src={location.cover}
            alt={location.title}
          ></img>
          <h2>{location.title}</h2>
        </a>
      ))}
    </section>
  );
};

export default ThumbCard;
