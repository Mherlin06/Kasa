import "../styles/Banner.css";

const Banner = ({ classes, title, isHome }) => {
  return (
    <section className={classes}>{isHome ? <h1>{title}</h1> : null}</section>
  );
};

export default Banner;
