let headers = [
  { name: "About me", anchor: "about-me" },
  { name: "Skills", anchor: "about-me" },
  { name: "Career", anchor: "about-me" },
  { name: "Projects", anchor: "about-me" },
  { name: "Contact", anchor: "about-me" },
];
let aboutItems = [
  {
    title: "8 years of experience",
    text: "I have learnt to work in different conditions, for and with numerous people. For me, in variaty, there is growth.",
    icon: "fa-regular fa-calendar-days",
  },
  {
    title: "Back-end developer",
    text: "I have focused my efforts in learning python based stacks, like <a href='https://www.djangoproject.com/'>Django</a> and Flask, to build amazing websites and apps.",
    icon: "fas fa-terminal",
  },
  {
    title: "All for one and one for all",
    text: "From working alone, to going side to side with many people, has taught  me that there is strength in numbers.",
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
        skill_name: "Microsoft (Integrations, Apps)",
        level: 2,
      },
      {
        skill_name: "Google (Analytics & APIs)",
        level: 1,
      },
      {
        skill_name: "Redmine, Jira and Trello",
        level: 3,
      },
    ],
  },
  {
    group_name: "Languages",
    skills: [
      {
        skill_name: "Spanish",
        level: 3,
      },
      {
        skill_name: "English",
        level: 3,
      },
      {
        skill_name: "Catalan",
        level: 2,
      },
      {
        skill_name: "French",
        level: 1,
      },
    ],
  },
];
let careerItems = [
  {
    title: "Higher Technician in Development of Web Applications",
    site: "https://www.todofp.es/dam/jcr:7c3d42db-83bf-4abb-9d81-cd4f41fe1a1a/n-tsdesarrolloaplicacionesweben-pdf.pdf",
    type: "studies",
    text: "Professional module of developing, implementing and maintaining web applications.",
    monthStart: "January",
    yearStart: "2015",
    monthEnd: "July",
    yearEnd: "2017",
  },
  {
    title: "Amara",
    site: "https://amara-marketing.com",
    type: "job",
    text: "Worked as a solo developer, with a marketing and designing team, building websites to help clients grow their brand, using marketing strategies and cutting edge designs to bring <a href='https://amara-marketing.com/en/services/revenue-oriented-web-design/'>new leads</a> into their businesses. ",
    monthStart: "July",
    yearStart: "2017",
    monthEnd: "February",
    yearEnd: "2020",
  },
  {
    title: "Bidari",
    site: "https://bidari.es",
    type: "job",
    text: "During my time in Bidari, I was in charge of maintaining a financial and stadistical application to manage invoices. <br>Bidari introduced me to development in MacOS ecosystem and python-based projects.",
    monthStart: "February",
    yearStart: "2020",
    monthEnd: "June",
    yearEnd: "2020",
  },
  {
    title: "APSL (Nagarro)",
    site: "https://apsl.tech",
    type: "job",
    text: "APSL gave me the opportunity to start working in a <a href='https://apsl.tech/en/blog/delivery-team'>team of developers</a>, with different roles but with a sole goal.<br> Used mainly <a href='https://www.djangoproject.com/'>Django</a> and I am starting to like it!",
    monthStart: "February",
    yearStart: "2021",
  },
  {
    title:
      "Master's Degree of Professional Training in Artificial Intelligence and Big Data",
    site: "https://todofp.es/dam/jcr:e0dd2b42-bb45-4659-aeda-b16512a04bcc/ce-gs-inteligencia-artificial-y-big-data.pdf",
    type: "studies",
    text: "Course focused on programming and applying intelligent systems that optimize the management of information and the exploitation of massive data.",
    monthStart: "October",
    yearStart: "2024",
  },
];
let projects = [
  {
    repo_name: "search-in-pdf",
    name: "Search in pdfs",
    html_url: "https://github.com/germanitxu/search-in-pdf",
    description: "Search words or phrases in PDFs.",
    repo_description: "Search words or phrases in PDFs.",
    languages: ["Python", "HTML", "CSS", "Shell"],
  },
  {
    repo_name: "ScrapVoleibolIb",
    name: "Scrap Voleibol IB",
    html_url: "https://github.com/germanitxu/ScrapVoleibolIb",
    description:
      "Scraps the website https://www.voleibolib.net/ and download the results into a CSV file, with the option to export future matches into your Google Calendar",
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
      "Train models on different algorithms and use Flask to display a page that predicts the species of a penguin based on some body characteristics.",
    languages: ["Python", "HTML", "CSS"],
  },
];
config_en = {
  headers: headers,
  aboutItems: aboutItems,
  careerItems: careerItems,
  skillItems: skillItems,
  projects: projects,
};

export default config_en;
