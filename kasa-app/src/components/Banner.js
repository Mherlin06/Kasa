import "../styles/Banner.css";

const Banner = (props) => {
  return (
    <section className={props.class}>
      <h1>{props.title}</h1>
    </section>
  );
};

export default Banner;
