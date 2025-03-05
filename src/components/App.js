import { Header } from "./Header/Header";
import { Intro } from "./Intro/Intro";
import { AboutSection } from "./About/About";
import { Skill } from "./Skill/Skill";
import { Career } from "./Career/Career";
import { Project } from "./Project/Project";
import { Contact } from "./Contact/Contact";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import getConfig from "../config/Config";

export function App() {
  const { t, i18n } = useTranslation();
  let config = getConfig(i18n.language);
  return (
    <section className="main">
      <Header headers={config.headers}></Header>
      <Intro />
      <Container className="my-xl-5">
        <h2 id="About-me" className="display-3">
          {t("About me")}
        </h2>
        <AboutSection items={config.aboutItems} />
      </Container>
      <Skill items={config.skillItems} />
      <Container className="my-xl-5">
        <h2 id="Career" className="display-3">
          {t("Career")}
        </h2>
        <Career items={config.careerItems} />
      </Container>

      <Project projects={config.projects} />
      <Contact />
    </section>
  );
}
