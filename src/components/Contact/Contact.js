import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";

import "./contact.css";

export function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div className="contact-wrapper">
      <Container className="contact-container">
        <h2 id="Contact" className="display-3">
          {t("Contact & information")}
        </h2>
        <div className="contact-items">
          <div className="contact-item">
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:germanitxu@gmail.com">Gmail</a>
          </div>
          <div className="contact-item">
            <i className="bi bi-github"></i>
            <a href="https://github.com/germanitxu/" target="_blank">
              Github
            </a>
          </div>
          <div className="contact-item">
            <i className="bi bi-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/german-munoz-gil/"
              target="_blank"
            >
              LinkeIn
            </a>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-earth-europe"></i>
            <a
              href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/german-mu%C3%B1oz/2e3c96e3-59c0-4b4a-8f44-6fd176b11653?view=html"
              target="_blank"
            >
              Europass
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
