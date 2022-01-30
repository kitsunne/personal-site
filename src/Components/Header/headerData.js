import React from "react";
import { FaLinkedin, FaGithub, FaFreeCodeCamp, FaCode } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "ABOUT",
  },
  {
    id: 2,
    url: "/portfolio",
    text: "PORTFOLIO",
    icon: <FaCode />,
  },
  {
    id: 3,
    url: "/cv",
    text: "CV",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.freecodecamp.org/dariakiselyva",
    icon: <FaFreeCodeCamp />,
  },
  {
    id: 2,
    url: "https://github.com/kitsunne",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/daria-kiseliova/",
    icon: <FaLinkedin />,
  },
];
