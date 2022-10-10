import bannerImage from "../assets/photo-1593201464350-96ec57065aa2.webp";
import "../styles/Banner.css";

const Banner = () => {
  const title = "Chez vous, partout et ailleurs";
  return (
    <section className="banner">
      <img src={bannerImage} alt="banner"></img>
      <h1>{title}</h1>
    </section>
  );
};

export default Banner;
