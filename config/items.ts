import designSystem from "@style/designSystem";
import KnowledgeItem from "model/KnowledgeItem.model";
import ResumeItem from "../model/ResumeItem.model";

export const resumeItems: ResumeItem[] = [
  {
    title: "Agido GmbH",
    start_year: null,
    end_year: 2019,
    description:
      "Weiterentwicklung Java Swing Client\nEntwicklung JBoss Backend",
  },
  {
    title: "Adesso SE",
    start_year: null,
    end_year: 2020,
    description:
      "Entwicklung einer Java Android App\nKommunikation mit der Adesso ChatBot Workbench",
  },
  {
    title: "Fachhochschule Dortmund",
    start_year: 2017,
    end_year: null,
    description:
      "Erlernen von UML Modellierung, Best Practice und Java, sowie den Web Grundlagen (HTML5, CSS3, JS) ",
  },
  {
    title: "Bookwire GmbH",
    start_year: 2021,
    end_year: null,
    description:
      "Mitarbeit an React basierten Webapplikationen",
  },
];

export const knowledgeItems: KnowledgeItem[] = [
  {
    title: "Design",
    description:
      "Meine Fähigkeiten im Bereich Web Design",
    items: [
      "Adobe XD",
      "Figma",
      "Affinity Suite",
    ],
    color:
      designSystem.colors.palette.brown
        .base,
  },
  {
    title: "Frontend",
    description:
      "Meine Fähigkeiten im Bereich der Frontend Softwareentwicklung",
    items: [
      "React",
      "Javascript/Typescript",
      "HTML5",
      "CSS3",
      "Electron.js",
    ],
    color:
      designSystem.colors.palette.green
        .dark,
  },
  {
    title: "Backend",
    description:
      "Meine Fähigkeiten im Bereich der Server Entwicklung",
    items: [
      "Node.js",
      "Java",
      "Elxir",
      "MongoDB",
      "Postgres",
      "MySQL",
    ],
  },
];
