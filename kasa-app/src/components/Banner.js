import bannerImage from "../assets/home-banner-image.jpg";
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
