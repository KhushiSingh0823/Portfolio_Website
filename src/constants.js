// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.jpg';
import cssLogo from './assets/tech_logo/css.jpg';
import javascriptLogo from './assets/tech_logo/javascript.jpg';
import reactjsLogo from './assets/tech_logo/reactjs.jpg';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.jpg';
import javaLogo from './assets/tech_logo/java.jpg';
import pythonLogo from './assets/tech_logo/python.jpg';
import gitLogo from './assets/tech_logo/git.jpg';
import githubLogo from './assets/tech_logo/github.jpg';
import vscodeLogo from './assets/tech_logo/vscode.jpg';
import cLogo from './assets/tech_logo/c.jpg';

// Experience Section Logo's
import letsgrowmoreLogo from './assets/company_logo/letsgrowmoreLogo.jpeg';
import codtechLogo from './assets/company_logo/codtechLogo.jpeg';

// Education Section Logo's
import cmhsLogo from './assets/education_logo/cmhs_logo.jpeg';
import dpsLogo from './assets/education_logo/dps_logo.jpeg';
import rvscetLogo from './assets/education_logo/rvscet_logo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
  
    {
      id: 1,
      img: letsgrowmoreLogo,
      role: "Frontend Developer",
      company: "Lets GROW MORE",
      date: "1 June 2024 - 30 June 2024",
      desc: "Developed dynamic and scalable web applications using the HTML, CSS, JS and REACTJS.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rvscetLogo,
      school: "RVS College Of Engineering and Technology, JAMSHEDPUR",
      date: "2025-Present",
      grade: "8.14sgpa (4th Sem)",
      desc: "I am currently pursuing my Bachelor's degree in Computer Science (BTECH) from RVS College Of Engineering and Technology, JAMSHEDPUR. Throughout my studies, I am immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at RVSCET College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - BTech (Computer Science)",
    },
    {
      id: 1,
      img: dpsLogo,
      school: "Delhi Public School, GAYA",
      date: "2022",
      grade: "76%",
      desc: "I completed my class 12 education from Delhi Public School, GAYA, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - Physics, Chemistry, and Mathematics (PCM)",
    },
    {
      id: 2,
      img: cmhsLogo,
      school: "Creane Memorial High School, GAYA",
      date: "2020",
      grade: "84.8%",
      desc: "I completed my class 10 education from Creane Memorial High School, GAYA, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)- Science with Information Technology (IT)",
    },
  ];
  
  
