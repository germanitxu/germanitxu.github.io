import config_en from "./config_en";
import config_es from "./config_es";

export default function getConfig(language) {
  switch (language) {
    case "es":
      return config_es;
    case "en":
      return config_en;
    default:
      return config_en;
  }
}
