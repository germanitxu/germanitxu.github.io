import Container from "react-bootstrap/Container";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";

function AboutItem(props) {
  return (
    <Col className="about-item" xl>
      <div className="about-item-title">
        <i className={props.icon} aria-hidden="true"></i>
        <h4>{props.title}</h4>
      </div>

      <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
    </Col>
  );
}

export function AboutSection(props) {
  return (
    <div>
      <Container className="about-grid">
        <Row>
          {props.items.map((item, i) => (
            <AboutItem
              key={`about-item-${i}`}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
