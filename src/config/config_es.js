let headers = [
  { name: "Sobre mi", anchor: "About-me" },
  { name: "Habilidades", anchor: "Skills" },
  { name: "Trayectoria", anchor: "Career" },
  { name: "Proyectos", anchor: "Projects" },
  { name: "Contacto", anchor: "Contact" },
];
let aboutItems = [
  {
    title: "8 años de experiencia",
    text: "He aprendido a trabajar en múltiples condiciones, para y con numerosas personas. Para mi, en la variedad, está el crecimiento.",
    icon: "fa-regular fa-calendar-days",
  },
  {
    title: "Desarrollador Backend",
    text: "He centrado mis esfuerzos en aprender stacks basados en python, como <a href='https://www.djangoproject.com/'>Django</a> y Flask",
    icon: "fas fa-terminal",
  },
  {
    title: "Todos para uno, uno para todos",
    text: "De trabajar en solitario a ir codo con codo con varios compañeros, he aprendido que en hay fuerza en la multitud.",
    icon: "fa-solid fa-people-group",
  },
];

let skillItems = [
  {
    group_name: "Backend",
    skills: [
      {
        skill_name: "Python",
        level: 3,
      },
      {
        skill_name: "Django",
        level: 3,
      },
      {
        skill_name: "PostgreSQL",
        level: 2,
      },
      {
        skill_name: "C#, .NET Core",
        level: 1,
      },
    ],
  },
  {
    group_name: "Frontend",
    skills: [
      {
        skill_name: "HTML, CSS & Javascript",
        level: 3,
      },
      {
        skill_name: "Angular",
        level: 1,
      },
      {
        skill_name: "React",
        level: 1,
      },
      {
        skill_name: "Bootstrap",
        level: 2,
      },
    ],
  },
  {
    group_name: "Workflows",
    skills: [
      {
        skill_name: "Git (Github, Gitlab & Bitbucket)",
        level: 3,
      },
      {
        skill_name: "Microsoft (Integraciones, Apps)",
        level: 2,
      },
      {
        skill_name: "Google (Analytics & APIs)",
        level: 1,
      },
      {
        skill_name: "Redmine, Jira & Trello",
        level: 3,
      },
    ],
  },
  {
    group_name: "Idiomas",
    skills: [
      {
        skill_name: "Castellano",
        level: 3,
      },
      {
        skill_name: "Inglés",
        level: 3,
      },
      {
        skill_name: "Catalán",
        level: 2,
      },
      {
        skill_name: "Francés",
        level: 1,
      },
    ],
  },
];
let careerItems = [
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    site: "https://www.todofp.es/dam/jcr:a3781fa8-7e48-4d22-8cdb-b05f67f44306/n-tsdesarrolloaplicacioneswebes-pdf.pdf",
    type: "studies",
    text: "Módulo de formación profesional para adquirir las competencias para desarrollar, implantar, y mantener aplicaciones web.",
    monthStart: "Enero",
    yearStart: "2015",
    monthEnd: "Julio",
    yearEnd: "2017",
  },
  {
    title: "Amara",
    site: "https://amara-marketing.com",
    type: "job",
    text: "Empleado como único desarrollador, con un equipo de marketing y diseño, creando sitios web para ayudar a los clientes a hacer crecer su marca, utilizando estrategias de marketing y diseños de vanguardia para atraer <a href='https://amara-marketing.com/en/services/revenue-oriented-web-design/'>nuevos clientes potenciales</a> a sus negocios. ",
    monthStart: "Julio",
    yearStart: "2017",
    monthEnd: "Febrero",
    yearEnd: "2020",
  },
  {
    title: "Bidari",
    site: "https://bidari.es",
    type: "job",
    text: "Durante mi estancia en Bidari, me encargué del mantenimiento de una aplicación financiera y estadística para la gestión de facturas <br>Bidari me introdujo en el desarrollo en el ecosistema MacOS y en proyectos basados en python.",
    monthStart: "Febrero",
    yearStart: "2020",
    monthEnd: "Junio",
    yearEnd: "2020",
  },
  {
    title: "APSL (Nagarro)",
    site: "https://apsl.tech",
    type: "job",
    text: "APSL me dio la oportunidad de empezar a trabajar en un <a href='https://apsl.tech/en/blog/delivery-team'>equipo de desarrolladores</a> con diferentes funciones pero con un único objetivo.<br> He utilizado principalmente <a href='https://www.djangoproject.com/'>Django</a> y ¡me está empezando a gustar!",
    monthStart: "Febrero",
    yearStart: "2021",
  },
  {
    title:
      "Título de Máster de Formación Profesional en Inteligencia Artificial y Big Data",
    site: "https://todofp.es/dam/jcr:498b6e3d-266e-4d1a-9939-ec442ce6c41b/ce-gs-inteligencia-artificial-y-big-data.pdf",
    type: "studies",
    text: "Curso centrado en la programación y aplicación de sistemas inteligentes que optimicen la gestión de la información y la explotación de datos masivos.",
    monthStart: "Octubre",
    yearStart: "2024",
  },
];

let projects = [
  {
    repo_name: "search-in-pdf",
    name: "Search in pdfs",
    html_url: "https://github.com/germanitxu/search-in-pdf",
    description:
      "Búsqueda de palabras o frases en un conjunto específico de PDFs.",
    repo_description: "Search words or phrases in PDFs.",
    languages: ["Python", "HTML", "CSS", "Shell"],
  },
  {
    repo_name: "ScrapVoleibolIb",
    name: "Scrap Voleibol IB",
    html_url: "https://github.com/germanitxu/ScrapVoleibolIb",
    description:
      "Scrapper de la web https://www.voleibolib.net/ para descargar los partidos y resultados en un CSV, con opción de exportar los partidos a tu calendario de Google.",
    repo_description:
      "Scraps the website https://www.voleibolib.net/ and download the results into a CSV file",
    languages: ["Python"],
  },
  {
    repo_name: "tasca-3-programacio",
    name: "Penguin predictor",
    html_url: "https://github.com/germanitxu/tasca-3-programacio",
    repo_description:
      "Tasca 3 Programació d'intel·ligència artificial: Predicció de especies de pingüins.",
    description:
      "Entrena modelos basados en diferentes algoritmos y usa un entorno Flask para mostrar un formulario para predecir la espécie de un pingüino basado en algunas características de su cuerpo.",
    languages: ["Python", "HTML", "CSS"],
  },
];
let config_es = {
  headers: headers,
  aboutItems: aboutItems,
  careerItems: careerItems,
  skillItems: skillItems,
  projects: projects,
};

export default config_es;
