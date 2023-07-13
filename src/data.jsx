import { FaUserAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";

import { AiFillHome } from "react-icons/ai";

import { BsEnvelopeFill } from "react-icons/bs";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <AiFillHome className="nav-icon" />,
  },

  {
    id: 2,
    name: "About",
    path: "/about",
    icon: <FaUserAlt className="nav-icon" />,
  },

  {
    id: 4,
    name: "Contact",
    path: "/contact",
    icon: <BsEnvelopeFill className="nav-icon" />,
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Yusuf",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Demirci",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Türkiye",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Istanbul",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+905434184052",
  },

  {
    id: 8,
    title: "Email : ",
    description: "yusuffdemirci10@gmail.com",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Aug 2022 - Sep 2022",
    title: "IT Intership <span> Pulver Powder Coatings </span>",
    desc: "C#,Sql Server,Asp.Net Core",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "July 2023 - Present",
    title: "Frotend Developer Intership <span> Arute Solutions </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020-Ongoing",
    title: "Software Engineering <span> Dogus University </span>",
    desc: "",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018-2019",
    title: "<span>Era Kurtköy High School </span>",
    desc: "",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015-2018",
    title: "<span> Pendik Anatolian High School </span>",
    desc: "",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "Css",
    percentage: "70",
  },

  {
    id: 3,
    title: "Tailwind",
    percentage: "50",
  },

  {
    id: 4,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 5,
    title: "React",
    percentage: "65",
  },

  {
    id: 6,
    title: "C#",
    percentage: "55",
  },

  {
    id: 7,
    title: "Asp.Net Core",
    percentage: "50",
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
