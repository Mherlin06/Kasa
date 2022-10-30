import Banner from "../components/Banner";
import ThumbCard from "../components/ThumbCard";
import { getAccomodations } from "../data/accomodationData";

const Home = () => {
  const accomodations = getAccomodations();

  return (
    <main>
      <Banner
        title="Chez vous, partout et ailleurs"
        classes="banner"
        isHome="true"
      />
      <section className="thumbcards">
        {accomodations.map((accomodation) => (
          <ThumbCard key={accomodation.id} data={accomodation} />
        ))}
      </section>
    </main>
  );
};

export default Home;
