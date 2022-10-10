import "../styles/ThumbCard.css";

const ThumbCard = () => {
  let rentTitle = "Titre de la location";
  return (
    <section className="thumbcard">
      <a href="#">
        <h2>{rentTitle}</h2>
      </a>
      <a href="#">
        <h2>{rentTitle}</h2>
      </a>
      <a href="#">
        <h2>{rentTitle}</h2>
      </a>
      <a href="#">
        <h2>{rentTitle}</h2>
      </a>
    </section>
  );
};

export default ThumbCard;
