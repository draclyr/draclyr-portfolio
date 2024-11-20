import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiGit,
  SiBootstrap,
  SiMui,
  SiFlutter,
  SiTailwindcss,
} from "react-icons/si";


export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiWordpress,
    text: "Wordpress",
  },
  {
    icon: SiFlutter,
    text: "Flutter",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "NEXGEN",
    description: "💻free template for general use, fast, advanced and compatible with all browsers and platforms. ",
    link: "https://github.com/draclyr/Nexgen",
  },
  {
    title: "RONIC",
    description: "📱A professional project based on important front-end languages. ",
    link: "https://github.com/draclyr/Ronic",
  },
  {
    title: "IDRACLYR",
    description: "✅Professional template for corporate and personal topics and resume based on (Next JS, Typescript) which has special features.",
    link: "https://github.com/draclyr/Idraclyr",
  },
  {
    title: "LEBOR",
    description: "🌌project based on (NEXT JS, TYPESCRIPT) which has focused on beautiful and modern design. ",
    link: "https://github.com/draclyr/Lebor",
  },
  {
    title: "ARENSHOP",
    description: "📲An updated shop website and features based on reactjs.",
    link: "https://github.com/draclyr/arenshop",
  },
  {
    title: "RANEX",
    description: "🏩A professional, simple and very functional store website with the standards of an online store.",
    link: "https://github.com/draclyr/ranex",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Personal Projects",
    logo: "/25231.png",
    position: "front-end programmer",
    description: "Part of my ability can be seen in GitHub projects that I spent about a year on.",
    years: "2023 - 2024",
  },
  {
    company: "Webnegah Company",
    logo: "/webnegah.png",
    position: "front-end programmer - SEO",
    description: "Has one year of work experience in this company as a front-end programmer and SEO.",
    years: "Jan 2019 - Oct 2020",
  },
  {
    company: "Ratin Company",
    logo: "/ratin.png",
    position: "front-end programmer",
    description: "I have worked for 3 years in Ratin Company, which is one of the important companies in Tehran",
    years: "May 2019 - Aug 2021",
  },
  {
    company: "Nextpay Company",
    logo: "/nextpay.png",
    position: "front-end programmer",
    description:
      "Write briefly about your university experience (degree, subject, etc.)",
    years: "Mar, 2023 - Feb, 2024",
  },
];

export const aboutYou = {
  name: "Hesam Shahmoradi",
  description:
    "Hello, my name is Hesam Shahmoradi.With 7 years of experience in programming, I specialize in front- end development, web design, and SEO.My expertise includes a wide range of technologies such as HTML, CSS, SCSS, JavaScript, Bootstrap, Tailwind, jQuery, ReactJS, NextJS, and TypeScript.I am passionate about creating visually appealing and user - friendly websites that meet the latest industry standards.I was born in Tehran, and over the years, I have honed my skills to deliver high - quality web solutions.My journey in the tech world has been driven by a commitment to continuous learning and staying updated with the latest trends and best practices in web development.I thrive in collaborative environments and enjoy working on projects that challenge me to push the boundaries of my creativity and technical abilities.",
  yearsOfExperience: "7 years",
  location: "Tehran",
  email: "draclyr@gmail.com",
};

export const logoText = "@Draclyr";

export const marketingHeadlines = {
  mainHeadline: "Everything about my work history and abilities:",
};


export const websiteMetadata = {
  title: "Hesam Shahmoradi - portfolio",
  description: "Draclyr Portfolio.",
};
