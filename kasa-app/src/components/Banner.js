import bannerImage from "../assets/photo-1593201464350-96ec57065aa2.webp";
import "../styles/Banner.css";

const Banner = () => (
  <section className="banner">
    <img src={bannerImage} alt="banner"></img>
    <h1>Chez vous, partout et ailleurs</h1>
  </section>
);

export default Banner;
