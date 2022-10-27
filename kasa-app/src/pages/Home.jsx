import Banner from "../components/Banner";
import ThumbCard from "../components/ThumbCard";

const Home = () => {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" class="banner" isHome="true"/>
      <ThumbCard />
    </main>
  );
};

export default Home;