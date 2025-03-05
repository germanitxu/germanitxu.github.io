import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import "./project.css";

function ProjectCard(props) {
  let project = props.project;
  let languages = project.languages;

  let homepage = project.homepage ? (
    <a target="_blank" href={project.homepage}>
      <i className="bi bi-box-arrow-up-right"></i>
    </a>
  ) : null;
  return (
    <Col className="project-card" xl={3} sm={12}>
      <div className="project-card-title">
        <h4>
          <a href={project.html_url} target="_blank">
            {project.name}
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </h4>
        {homepage}
      </div>

      <p className="project-card-text">{project.description}</p>
      <div className="project-card-languages">
        {languages &&
          languages.map((language, i) => (
            <span key={`language-${i}`}>{language}</span>
          ))}
      </div>
    </Col>
  );
}
export function Project(props) {
  const { t, i18n } = useTranslation();

  let projects = props.projects;
  return (
    <div className="project-background">
      <Container className="project-container">
        <h2 id="Projects" className="display-3">
          {t("Projects")}
        </h2>
        <Row className="project-card-container">
          {projects &&
            projects.map((project, i) => (
              <ProjectCard key={`project-card-${i}`} project={project} />
            ))}
        </Row>
      </Container>
    </div>
  );
}
