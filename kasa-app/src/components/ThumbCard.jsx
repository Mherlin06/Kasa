import { Link } from "react-router-dom";
import "../styles/ThumbCard.css";

const ThumbCard = ({ data }) => {
  return (
    <Link to={"/fiche-logement/" + data.id} key={data.id}>
      <img src={data.cover} alt={data.title}></img>
      <h2>{data.title}</h2>
    </Link>
  );
};

export default ThumbCard;
