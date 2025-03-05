import React, { useState } from "react";
import flagEn from "../../static/img/flag-en.png";
import flagEs from "../../static/img/flag-es.png";
import "./languageSwitch.css";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language == "en");

  const handleToggle = () => {
    setIsEnglish(!isEnglish);
    let language = !isEnglish ? "en" : "es";
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-container">
      <div onClick={handleToggle} className="language-switch">
        <div
          className={`flag flag-en ${isEnglish ? "active" : ""}`}
          style={{ backgroundImage: `url("${flagEn}")` }}
        ></div>
        <div className={`language-switcher ${isEnglish ? "en" : "es"}`}>
          {isEnglish ? "EN" : "ES"}
        </div>
        <div
          className={`flag flag-es ${!isEnglish ? "active" : ""}`}
          style={{ backgroundImage: `url("${flagEs}")` }}
        ></div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
