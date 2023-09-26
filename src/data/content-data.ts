export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Software Engineer at Mindex",
        subTitle: "Remote",
        date: "2022 - Present",
        description: `Backend engineer using technologies such as Java, Spring,
                      OracleDB, Jenkins, Kafka, Openshift, etc...`,
      },
      {
        title: "Researcher at Rochester Institute of Technology",
        subTitle: "Rochester, NY",
        date: "2020 - 2022",
        description: `Worked on the black hole initial data problem of
                      numerical general relativity.`,
      },
      {
        title: "NASA Intern at NASA Goddard Space Flight Center",
        subTitle: "Greenbelt, MD",
        date: "Summer 2021",
        description: `Conducted investigation on the "trumpet"
                      configuration for solving the initial data of
                      a system of black holes.`,
      },
    ],
  },

  {
    title: "Education",
    items: [
      {
        title: "PhD Studies",
        subTitle: "Rochester Institute of Technology",
        date: "2020 - 2022",
        description:
          "Specialized in mathematical modeling of black hole systems.",
      },
      {
        title: "MPhil",
        subTitle: "Newcastle University",
        date: "2018 - 2020",
        description: "Masters of Philosophy in Computational Physics",
      },
      {
        title: "MSc",
        subTitle: "University of Edinburgh",
        date: "2017 - 2018",
        description: "Masters of Science in Mathematical Physics",
      },
      {
        title: "BA / MA",
        subTitle: "CUNY Hunter College",
        date: "2009 - 2016",
        description: "Combined BA/MA program in Pure Mathematics",
      },
    ],
  },

  {
    title: "Publications",
    items: [
      {
        title: "Bubble nucleation at zero and nonzero temperatures",
        subTitle: "Physical Reviews",
        date: "2023",
        description: `Breakthrough algorithm that effectively models
                      early universe bubble nucleation at zero and nonzero
                      temperatures.`,
      },
      {
        title: "Brief Overview of Numerical Relativity",
        subTitle: "Birkhäuser",
        date: "2022",
        description: `Overview of techniques used for solving the Einstein
                      Field Equations on a numerical grid.`,
      },
    ],
  },
];

export type ContentType = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = ContentType[];
