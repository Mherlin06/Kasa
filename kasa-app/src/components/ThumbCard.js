import "../styles/ThumbCard.css";
import { locationList } from "../data/locationList";

const ThumbCard = () => {
  return (
    <section className="thumbcard">
      {locationList.map((location) => (
        <a href="#" key={location.id}>
          <img key={location.id} src={location.cover} alt={location.title}></img>
          <h2 key={location.id}>{location.title}</h2>
        </a>
      ))}
    </section>
  );
};

export default ThumbCard;
