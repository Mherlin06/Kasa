import "../styles/Banner.css";

const Banner = (props) => {
  const isHome = props.isHome;

  return (
    <section className={props.class}>
      {isHome ? <h1>{props.title}</h1> : null}
    </section>
  );
};

export default Banner;
