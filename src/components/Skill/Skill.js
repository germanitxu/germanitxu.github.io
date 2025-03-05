import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Trans, useTranslation } from "react-i18next";
import "./skill.css";

function SkillItem(props) {
  const skill = props.skill;
  return (
    <li className={`skill-item skill-level-${skill.level}`}>
      {skill.skill_name}
    </li>
  );
}
function SkillGroup(props) {
  group_name = props.group.group_name;
  group_skills = props.group.skills;
  return (
    <Col className="skill-group" sm={6} xl={3}>
      <h3>{group_name}</h3>
      <ul className="skill-group-list">
        {group_skills.map((skill, i) => (
          <SkillItem key={`skill-item-${i}`} skill={skill} />
        ))}
      </ul>
    </Col>
  );
}

function LegendItem(props) {
  return (
    <div className="skill-legend-item">
      <span className={`skill-level-indicator level-${props.level}`}></span>
      <p title={props.extraText}>{props.text}</p>
    </div>
  );
}

export function Skill(props) {
  const { t, i18n } = useTranslation();
  let skill_groups = props.items;
  return (
    <div className="skills-background">
      <Container className="skill-container">
        <h2 id="Skills" className="display-3">
          {t("Skills")}
        </h2>

        <Row className="skill-groups-row">
          {skill_groups.map((group, i) => (
            <SkillGroup key={`skill-group-${i}`} group={group} />
          ))}
        </Row>
        <div className="skill-legend">
          <LegendItem
            level={3}
            text={t("Strong")}
            extraText={t("Used on daily basis.")}
          />
          <LegendItem
            level={2}
            text={t("Trained")}
            extraText={t("Used on certain occasions or specific projects.")}
          />
          <LegendItem
            level={1}
            text={t("Initiated")}
            extraText={t("It got my curiosity and my time.")}
          />
        </div>
      </Container>
    </div>
  );
}
