import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutInfos from "../data/aboutInfos"

const About = () => {
    return (
        <main>
            <Banner class="banner about-banner"/>
            {aboutInfos.map((infos) => <Dropdown label={infos.label} description={infos.description}/>)}
        </main>
    );
}

export default About