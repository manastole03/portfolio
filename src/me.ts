import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import {
  SiC,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Manas Tole",
  // Facts are optional
  facts: [
    "You can use this website as your portfolio too. If you need help, just ask!",
    "Did you know? You can hire me!",
    "This website is fully navigable with a keyboard.",
    "I also build PCBs and make hardware projects.",
    "You can change your color scheme by clicking the top right icon.",
    "Kubernetes and croissants are my two favorite things—both require finesse.",
    "I built my own bus tracker display, so I'm never late in the morning.",
    "I track temperature and humidity in my room and have 3 months of data. Ask me what I found!",
    "Try clicking on random things; you might find some fun animations.",
    "I spent about 6 hours on the theme button alone.",
    "Try opening the console and see if you can find any easter eggs.",
    "I mentor students and help fix projects during HackUMass.",
    "I've spent too long on the animations and theme system of this website.",
    "I'm a huge fan of the show Silicon Valley.",
    "Sometimes, I redesign parts of this website just for fun. Call it a 'perpetual beta.'",
    "This website has a dark mode because, let’s be real, we're programmers.",
  ],
  subtitle: "Full-Stack Developer | Computer Science Student",
  tagline:
    "I love to build fun, high-quality experiences and continuously learn new things.",
  bigHeading: {
    black: "I make things",
    blue: "for the web",
  },
  about:
    "Senior Computer Engineering student who strives for high-quality hardware and software experiences. I love making fun projects and building stuff I like to use myself. Oh, and here is a croissant for you 🥐!",
  location: "Amherst, MA",
  image: "/assets/arhammusheer.jpeg",
  education: [
    {
      degree: "Bachelor of Engineering",
      major: "Information Technology",
      school: "Savitribai Phule Pune University",
      graduation: "April 2023",
      CGPA :"9.26 (on scale of 10)",
      awards: ["Coursework: Data Structures, Algorithms Analysis, Artificial Intelligence , Operating System, Cloud Computing, Database Management, Machine Learning, Computer Architecture, Object Oriented Programming, System Design, Blockchain Technology, Data Science"],
    },
  ],
  experience: [
    {
      company: "Bajaj Allianz Genral Insurance Company",
      location: "Pune, IND",
      position: "Senior Application Engineer",
      duration: "Jaly 2023 - Present",
      bullets: [
        " Promoted within a twelve-month timeframe, leading a team of 5 developer",
        " Led full-stack application development for MSME’s and Red Hat Single Sign-On project from frontend-backend development to cloud deployment, while managing a team of developers.",
        " Established secure API gateways for seamless frontend-backend communication, info  setup, cloud development and deployment for ensuring robust data protection",
        " Managed infrastructure setup, showcasing proficiency in a wide range of technologies a  cloud platform."
      ],
    },
    {
      company: "ETHDC TECHNOLOGIES PRIVATE LIMITED",
      location: "Pune, IND",
      position: "Project Intern",
      duration: "October 2022 - March 2023",
      bullets: [
        " Spearheaded full-stack application development lifecycle, from initiation to deployment.",
        " Implemented robust API gateways for secure frontend-backend communication",
        " Managed infrastructure setup and maintenance, showcasing proficiency across vario technologies"
      ],
    },
    {
      company: "Geeks-for-Geeks",
      location: "Pune, IND",
      position: "Technical Content Writter",
      duration: "March 2021 - November 2021",
      bullets: [
        " Authored 15+ technical articles on Java, Spring, Collection Framework, JDBC, and J2EE",
        " Revised and improved 5+ existing technical articles on related topics",
        " Demonstrated expertise in communicating complex technical concepts effectively",
      ],
    },
    {
      company: "Webbeey Infotech",
      location: "Pune, IND",
      position: "Application Developer",
      duration: "February 2020 - April 2020",
      bullets: [
        "Using Java/ J2EE technologies, I developed applications for clients and added functionalities to existing applications as per the requirement as well as performed unit testing of applications using JUnit",
      ],
    },
  ],
  projects: [
    {
      name: "AudioShelf",
      description:
        "A mobile app with over 2k users to discover audiobooks in 30 languages and summarize them in 5 minutes.",
      contribution:
        "I built the backend infrastructure for the app, including authentication systems, OAuth scope, and a REST API. I also built an internal CMS dashboard to manage content publishing and translations.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Google Cloud",
        "Docker",
        "OAuth2",
      ],
      links: [
        {
          name: "Website",
          uri: "https://getaudioshelf.com",
        },
        {
          name: "Play Store",
          uri: "https://play.google.com/store/apps/details?id=com.audioshelfapp",
        },
      ],
      image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: "Bus Tracker IoT",
      description:
        "An always-connected IoT device which lets me track when the next bus will leave my stop, helping me save time and plan better every morning.",
      contribution:
        "I built the entire IoT device from scratch using an ESP32, Arduino, and wrote a relay server in Node.js, and pulled data from the UMass Transit API to display the next bus time.",
      technologies: [
        "Node.js",
        "TypeScript",
        "ESP32",
        "Arduino",
        "C++",
        "Google Cloud",
      ],
      links: [
        { name: "Image", uri: "/assets/bus-tracker.png" },
        {
          name: "Write Up",
          uri: "https://github.com/arhammusheer/bus-tracker",
        },
      ],
      image: "/assets/bus-tracker.png",
      backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Croissant Paste It",
      description:
        "Ever wanted a place to dump some text and share it with someone or yourself on another device? Me too! So I built an app for your pasting needs.",
      contribution:
        "I designed and wrote the app in TypeScript with backend in Node.js and Express and the frontend in React.js. I also deployed the app on railway.app.",
      technologies: ["Node.js", "Express", "React", "TypeScript", "Railway"],
      links: [
        {
          name: "Website",
          uri: "https://paste.croissant.one",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/paste.croissant.one",
        },
      ],
      image: "/assets/croissant-paste-it.png",
    },
    {
      name: "Lord of the Lunchroom",
      description:
        "A project for HackUMass which lets 2 people in a cowboy duel smart hats to see who wins the table in the Worcester dining hall. The project won the 'Funnest Hack' award.",
      contribution:
        "I wrote the code for the matchmaking server and the Arduino smart hats, which used infrared technology as guns and detectors, and displays to show the match status.",
      image: "/assets/lord-of-the-lunchroom.jpg",
      backgroundImage: "/assets/lord-of-the-lunchroom.jpg",
      technologies: ["Node.js", "JavaScript", "ESP8266", "Arduino", "C++"],
      links: [
        {
          name: "Devpost",
          uri: "https://devpost.com/software/lord-of-the-lunchroom",
        },
        { name: "Image", uri: "/assets/lord-of-the-lunchroom.jpg" },
      ],
    },
    {
      name: "Croissant.one (This Website)",
      description: "A website to showcase my projects and resume.",
      contribution:
        "I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Vercel.",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "https://croissant.one",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/croissant.one",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "Dad API",
      description: "A REST API to get dad jokes and pickup lines.",
      contribution:
        "I built the entire API from scratch using Node.js and Express and deployed it on Google Cloud Run.",
      technologies: ["Node.js", "Express", "Google Cloud", "Docker"],
      links: [
        {
          name: "Try It Out",
          uri: "https://dad.croissant.one",
        },
        {
          name: "Joke Endpoint",
          uri: "https://dad.croissant.one/api/joke",
        },
        {
          name: "Pickup Line Endpoint",
          uri: "https://dad.croissant.one/api/pickup",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/dad-api",
        },
      ],
      image: "/assets/dad.png",
    },
  ],
  skills: [
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Golang",
      icon: SiGo,
    },
    {
      name: "Bash/Shell",
      icon: SiGnubash,
    },
    {
      name: "Embedded Systems",
      icon: HiChip,
    },
    {
      name: "C",
      icon: SiC,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Google Cloud",
      icon: SiGooglecloud,
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name: "Git",
      icon: FaGit,
    },
    {
      name: "Agile/Scrum",
      icon: DiScrum,
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "Mohammad-Arham-Resume.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/arhammusheer",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/mohammad-arham/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
    {
      name: "Gmail",
      icon: FaEnvelope,
      uri: "mailto:tolemanas.01@gmail.com",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "arhammusheer@gmail.com",
  },
} as IMe;
