import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./career.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

let filterCareerItems = [];

function CareerItem(props) {
  const { t, i18n } = useTranslation();
  let data = props.data;
  let orderClassName = props.isEven ? "even" : "odd";
  let typeClassName = data.type;
  let classNames = `career-item col-md-5 col-sm-12 mb-3 ${orderClassName} ${typeClassName}`;
  let dateStart = data.monthStart + ", " + data.yearStart;
  let onGoing = !(data.monthEnd && data.yearEnd);
  dateEnd = !onGoing ? data.monthEnd + ", " + data.yearEnd : t("Present");

  return (
    <div className={classNames}>
      <div className="career-item-title">
        <h3>
          {data.type == "job" ? (
            <i className="fa-solid fa-briefcase"></i>
          ) : (
            <i className="fa-solid fa-graduation-cap"></i>
          )}
          <a href={data.site} target="_blank">
            {data.title}
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </h3>

        <p>
          {dateStart} - {dateEnd}
        </p>
      </div>
      <p
        className="career-item-text"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></p>
    </div>
  );
}

function CareerLinePoint(props) {
  const ref = useRef(null);
  const scrollToPoint = () => {
    const element = ref.current;
    const headerOffset = 100;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <div
      ref={ref}
      onClick={scrollToPoint}
      className={`career-line-point ${
        props.className
          ? props.className
          : props.bottom == undefined
          ? "top"
          : "bottom"
      }`}
      style={{
        bottom: props.bottom,
        top: props.top,
        left: props.left,
        right: props.right,
      }}
    >
      <p>{props.text}</p>
    </div>
  );
}
function OrderButton(props) {
  if (props.recent) {
    return <i className="career-order-button-icon fa-solid fa-arrow-up"></i>;
  } else {
    return <i className="career-order-button-icon fa-solid fa-arrow-down"></i>;
  }
}

function FilterButton(props) {
  icon = null;
  switch (props.type) {
    case "studies":
      icon = <i className="fa-solid fa-graduation-cap"></i>;
      break;
    case "job":
      icon = <i className="fa-solid fa-briefcase"></i>;
      break;
    default:
      break;
  }
  return icon;
}

export function Career(props) {
  const { t, i18n } = useTranslation();
  const [isRecentFirst, setIsRecentFirst] = useState(true);
  const [isStudiesSelected, setIsStudiesSelected] = useState(false);
  const [isJobSelected, setIsJobSelected] = useState(false);
  const toggleOrder = () => {
    setIsRecentFirst(!isRecentFirst);
  };
  const addCareerItemFilter = (item) => {
    if (filterCareerItems.includes(item)) {
      filterCareerItems.splice(filterCareerItems.indexOf(item));
    } else {
      filterCareerItems.push(item);
    }
  };
  let careerItems = !isRecentFirst ? props.items : props.items.toReversed();
  careerItems = careerItems.filter(
    (item) => filterCareerItems.includes(item.type) || !filterCareerItems.length
  );
  return (
    <div className="career-container container">
      <div className="career-order">
        <ButtonGroup className="career-filter">
          <Button
            onClick={() => {
              addCareerItemFilter("studies");
              setIsStudiesSelected(!isStudiesSelected);
            }}
            className={`career-filter-button ${
              isStudiesSelected ? "selected" : ""
            }`}
            aria-labelledby="studies-filter-button"
          >
            <FilterButton type="studies" />
            <span className="tooltiptext" id="studies-filter-button">
              {t("Studies")}
            </span>
          </Button>
          <Button
            onClick={() => {
              addCareerItemFilter("job");
              setIsJobSelected(!isJobSelected);
            }}
            className={`career-filter-button ${
              isJobSelected ? "selected" : ""
            }`}
            aria-labelledby="job-filter-button"
          >
            <FilterButton type="job" />
            <span className="tooltiptext" id="job-filter-button">
              {t("Jobs")}
            </span>
          </Button>
        </ButtonGroup>
        <Button
          onClick={toggleOrder}
          className="career-order-button"
          aria-label="Order"
        >
          <OrderButton recent={isRecentFirst} />
          <span className="tooltiptext">
            {isRecentFirst ? t("Present last") : t("Present First")}
          </span>
        </Button>
      </div>
      <div className="career-chrono my-5">
        <div className="career-chrono-line">
          <CareerLinePoint
            text={isRecentFirst ? t("Present") : t("Start")}
            top={0}
          />
          <CareerLinePoint
            text={isRecentFirst ? t("Start") : t("Present")}
            bottom={0}
          />
        </div>
        {careerItems.map((item, i) => (
          <div key={`career-chrono-item-${i}`} className="career-chrono-item ">
            <CareerLinePoint
              text={item.monthStart + ", " + item.yearStart}
              top={0}
              className={i % 2 == 0 ? "even" : "odd"}
            />
            <CareerItem data={item} isEven={i % 2 == 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
