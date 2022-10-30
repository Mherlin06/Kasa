import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutInfos from "../data/aboutInfos";

const About = () => {
  return (
    <main>
      <Banner classes="banner about-banner" isHome="false"/>
      {aboutInfos.map((infos) => (
        <Dropdown label={infos.label} content={infos.description} classes="dropdown about-dropdown"/>
      ))}
    </main>
  );
};

export default About;
