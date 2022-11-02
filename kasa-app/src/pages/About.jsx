import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

import { getInfos } from "../data/aboutInfos";

const About = () => {
  const aboutInfos = getInfos();

  return (
    <main>
      <Banner classes="banner about-banner" isHome="false" />
      {aboutInfos.map((infos) => (
        <Dropdown
          label={infos.label}
          content={infos.description}
          classes="dropdown about-dropdown"
          key={infos.label}
        />
      ))}
    </main>
  );
};

export default About;
