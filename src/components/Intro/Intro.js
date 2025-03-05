import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import myImage from "../../static/img/photo_2025-media.jpg";
import { Trans, useTranslation } from "react-i18next";
import "./intro.css";

export function Intro() {
  const { t, i18n } = useTranslation();
  return (
    <div className="intro-ct dark">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center ">
            <Image
              src={myImage}
              className="intro-image "
              alt="German Muñoz in his terrace."
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center mt-5 ">
            <h3>
              {t("Welcome! My name is")} <strong>{t("Germán Muñoz")}</strong>
            </h3>
            <h4>{t("Backend programmer")}</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
