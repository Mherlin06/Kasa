import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutInfos from "../data/aboutInfos";

const About = () => {
  return (
    <main>
      <Banner classes="banner about-banner" isHome="false"/>
      {aboutInfos.map((infos) => (
        <Dropdown label={infos.label} description={infos.description} classes="dropdown"/>
      ))}
    </main>
  );
};

export default About;
