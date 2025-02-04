import {
    mobile,
    backend,
    creator,
    web,
    uiux,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    typescript,
    python,
    java,
    cplusplus,
    utd,
    gmf,
    pisd,
    wshs,
    tripguide,
    threejs,
    gym,
    music,
    gaming,
    hiking,
    basketball,
    solararray,
    socialcures,
    website,
    iqbot,
    lovify,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web/Mobile Dev",
      icon: web,
      desc: "My senior design project required my team to create both a web application as well as a mobile application"
    },
    {
      title: "Software Engineering",
      icon: backend,
      desc: "I have taken courses on various SWE topics throughout college and it continues to be one of my passions"
    },
    {
      title: "AI/Machine Learning",
      icon: creator,
      desc: "I was a member of a student org called Artificial Intelligence Society where our goal was to demystify AI for college students"
    },
    {
      title: "Data Analytics",
      icon: mobile,
      desc: "I have experience analyzing datasets to extract insights, using tools like Python and SQL for various projects"
    },
    {
      title: "UI/UX Design",
      icon: uiux,
      desc: "I love watching UI/UX overhauls of apps such as YouTube and Spotify and seeing how platforms can improve"
    },
  ];

  const hobbies = [
    {
      title: "Health & Fitness",
      icon: gym,
      desc: "I take my physical and mental health seriously and I love going to the gym for a productive lift"
    },
    {
      title: "Live Music & Concerts",
      icon: music,
      desc: "I've been to festivals such as Austin City Limits and Rolling Loud and have seen a lot of my favorite artists perform live"
    },
    {
      title: "Video Games",
      icon: gaming,
      desc: "My all-time favorites are Call of Duty:BO3, Red Dead Redemption 2, and Elden Ring. My current obsession is Marvel Rivals"
    },
    {
      title: "Nature Hiking",
      icon: hiking,
      desc: "Whenever I travel with friends, we always end up hiking. My favorite trails are in Hawaii, Seattle, and Arkansas"
    },
    {
      title: "Basketball & NBA",
      icon: basketball,
      desc: "I grew up in Memphis, so I grew up backing the Grizzlies, but I was born in Dallas, so I am a Mavericks fan at heart."
    },
  ]
  
  const technologies = [
    {
      name: "Java",
      icon: java,
      info: "https://www.java.com/en/download/help/whatis_java.html"
    },
    {
      name: "Python",
      icon: python,
      info: "https://www.python.org/doc/essays/blurb/"
    },
    {
      name: "C++",
      icon: cplusplus,
      info: "https://www.w3schools.com/cpp/cpp_intro.asp"
    },
    {
      name: "JavaScript",
      icon: javascript,
      info: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript"
    },
    {
      name: "TypeScript",
      icon: typescript,
      info: "https://www.w3schools.com/typescript/typescript_intro.php"
    },
    {
      name: "HTML",
      icon: html,
      info: "https://www.w3schools.com/Html/html_intro.asp"
    },
    {
      name: "CSS",
      icon: css,
      info: "https://www.w3schools.com/css/css_intro.asp"
    },
    {
      name: "React JS",
      icon: reactjs,
      info: "https://react.dev/"
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      info: "https://tailwindcss.com/"
    },
    {
      name: "Three JS",
      icon: threejs,
      info: "https://www.geeksforgeeks.org/introduction-to-three-js/"
    },
    {
      name: "Git",
      icon: git,
      info: "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F"
    },
    {
      name: "Figma",
      icon: figma,
      info: "https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma"
    },

  ];
  
  const experiences = [
    {
      title: "Python/Robotics Tutor",
      company_name: "Plano Independent School District",
      icon: pisd,
      iconBg: "#FFFFFF",
      date: "July 2023 - Present",
      points: [
        "Utilized interactive platforms such as Lego Spike and Lego WeDo 2.0 to create an immersive learning environment",
        "Fostered technical skills in robotics and creative abilities in children from grades 3rd to 5th",
        "Mentored groups of up to 20 children, aged 12-16, in foundational Python programming and programming logic"
      ],
    },
    {
      title: "Robotic Process Automation Engineer Intern",
      company_name: "General Motors Financial",
      icon: gmf,
      iconBg: "#FFFFFF",
      date: "May 2024 - Aug 2024",
      points: [
        "Developed RPA bots using the Automation Anywhere A360 Suite environment",
        "Eliminated time-consuming and redundant tasks, optimizing processes across the organization.",
        "Introduced on-demand parameter input into RPA bots resulting in real-time responses and increased RPA bot reusability",
      ],
    },
    {
      title: "Teacher's Assistant",
      company_name: "Erik Jonsson School of Engineering and Computer Science",
      icon: utd,
      iconBg: "#FFFFFF",
      date: "Aug 2023 - May 2024",
      points: [
        "Evaluated assignment submissions for Discrete Mathematics for Computing I and II",
        "Provided feedback to over 200 students throughout the semester",
        "Tailored instructional support to help students understand common mistakes",
      ],
    },
  ];

  const educations = [
    {
      school: "The University of Texas at Dallas",
      degree: "Bachelor of Science Degree in Computer Science",
      date: "Aug 2021 - Dec 2024",
      gpa: "3.69",
      courses: "Database Systems, Intro to Machine Learning, Probability and Statistics, Advanced Algorithms, UNIX and Systems Programming, Computer Networks, Software Engineering",
      honors: "Academic Excellence Scholar, Presidential Achievement Scholarship",
      iconBg: "#FFFFFF",
      icon: utd,
    },
    {
      school: "White Station High School",
      degree: "High School Diploma",
      date: "Aug 2017 - May 2021",
      gpa: "3.96",
      courses: "Computer Applications I & II",
      honors: "Tennessee Graduate with Honors and Distinction",
      iconBg: "#FFFFFF",
      icon: wshs,
    },
  ];
  
  const projects = [
    {
      name: "suyesh.com",
      subname: "Personal Website and Portfolio",
      description:
        "A responsive personal website highlighting personal education, professional experience, projects, skills, and more.",
      tags: [
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "orange-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "orange-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "orange-text-gradient",
        },
      ],
      image: website,
      links: [
        {
          url:"https://github.com/",
          desc:"https://github.com/",
        }
      ]
    },
    {
      name: "Kitario Solar Array",
      subname: "Solar Array Schematics for Non-Profit Organization",
      description:
        "A solar energy solution to address the critical water supply needs of the Kitario Settlement in Uganda. Provided detailed logistics and a comprehensive conceptual framework to the Kellermann Foundation, including design details, visualized data, and outlined integrated control systems.",
      tags: [
        {
          name: "Circuit Design",
          color: "orange-text-gradient",
        },
        {
          name: "CAD",
          color: "orange-text-gradient",
        },
        {
          name: "Python",
          color: "orange-text-gradient",
        },
        {
          name: "TeamManagement",
          color: "orange-text-gradient",
        },
      ],
      image: solararray,
      links: [
        {
          url: "https://github.com/UTDallasEPICS/Solar-Array-Kellermann-Kitario",
          desc: "Solar Hour Optimization Functions - GitHub",
        },
        {
          url: "../public/EPICS_Poster.pdf",
          desc: "Final Project Poster Presentation - PDF",
        },
      ],
    },
    {
      name: "SocialCures 2.0",
      subname: "Mobile Application & Administrative Dashboard Web Application",
      description:
        "A mobile application for college students to enhance campus safety, enabling users to view campus news and submit real-time incident reports. An online administrative dashboard to analyze user data and display analytics, integrating a Chabot capable of delivering specific data visualizations and responding to related queries",
      tags: [
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "orange-text-gradient",
        },
        {
          name: "UI/UX-Design",
          color: "orange-text-gradient",
        },
      ],
      image: socialcures,
      links:[
        {
          url:"https://www.youtube.com/watch?v=Jo3_hImhhqw",
          desc:"Administrative Dashboard Demo - YouTube",
        },
        {
          url:"https://www.youtube.com/watch?v=_ah6qepYjqI",
          desc:"Social Cures Mobile App Demo - YouTube",
        },
      ],
    },
    {
      name: "Vehicle Lease IQ Bot",
      subname: "Document Processing Automation",
      description:
        "A intelligent document processing solution that extracts specific information from unstructered data (Electric Vehicle Lease Forms) for data analyzation within GM Financial. Extracted data is then handled by robotic process automation bots to processed",
      tags: [
        {
          name: "Python",
          color: "orange-text-gradient",
        },
        {
          name: "OpticalCharacterRecognition",
          color: "orange-text-gradient",
        },
        {
          name: "RoboticProcessAutomation",
          color: "orange-text-gradient",
        },
      ],
      image: iqbot,
      links: [
        {
          url: "https://www.gmfinancial.com/en-us/tech-and-design/articles/business-process-automation.html",
          desc: "How RPA is used in GM Financial - Article",
        }
      ]
    },
    {
      name: "Lovify",
      subname: "Song Recommender/Classifier Social Media Platform",
      description:
        "A web application that analyzes music preferences to compute compatibility between users and provide personalized music recommendations. Includes a recommendation System based on a user's top 50 songs",
      tags: [
        {
          name: "Python",
          color: "orange-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "orange-text-gradient",
        },
        {
          name: "SpotifyWebAPI",
          color: "orange-text-gradient",
        },
        {
          name: "Flask",
          color: "orange-text-gradient",
        },
      ],
      image: lovify,
      links: [
        {
          url: "../public/LOVIFY.pdf",
          desc: "LOVIFY Presentation & Demo - PowerPoint",
        }
      ],
    },
  ];

  
  export { services, technologies, hobbies, experiences, educations, projects };