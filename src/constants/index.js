import {
    mobile,
    backend,
    creator,
    oracle,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cwp,
    lios,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.JS Developer",
      icon: reactjs,
    },
    {
      title: "Node.JS Developer",
      icon: nodejs,
    },
    {
      title: "Apex Developer",
      icon: oracle,
    },
    {
      title: "Mongo DB",
      icon: mongodb,
    },
    {
      title:"Tailwind CSS",
      icon:tailwind
    },
    {
      title:"JavaScript Developer",
      icon: javascript
    },
    {
      title: "Three JS",
      icon: threejs,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Analyst",
      company_name: "C&W Panama",
      icon: cwp,
      iconBg: "#383E56",
      date: "March 2018 - Feb 2021",
      points:["As data analyst of CWP's vehicle fleet, I managed and reported more than 600 devices that generated an average of 900 daily records per device, I implemented new reports that allowed a better control for the proper use of the fleet, one of these implementing a geofencing technology that allowed us to mark coordinates of interest. ",] ,
      
      
    },
    {
      title: "Web Developer Assistant",
      company_name: "Live and Invest Overseas",
      icon: lios,
      iconBg: "#E6DEDD",
      date: "April 2021 - Current",
      points: [
        "I started as a digital marketing assistant. In that position I assisted in the creation of new and effective promotions that helped increase the department's average earnings. ",
        "Currently Developing and maintaining web applications using JavaScript, PHP and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "React/Three Portfolio",
      description:
        "Personal Web developer portfolio with 3D interactive animations, using dependencies such as framer-motion react/three and react/three/drei and HOC's.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/KrlosDev/Krlos-Portfolio",
    },
    {
      name: "OpenAI API Codex",
      description:
        "Web application that enables users to ask code related questions or other inquiries and interact with GPT-3 using the Open AI API. Is writen in vanilla JS ",
      tags: [
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/KrlosDev/GTP-3-API-Codex-App",
    },
    {
      name: "Project Tndrfy",
      description:
        "An Ambitious project that merges the best features of both Spotify and Tinder, making it the best version of both in terms of user experience this a work in progress",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "ScSS",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/KrlosDev/project-tndrfy",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };