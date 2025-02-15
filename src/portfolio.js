const settings = {
  isSplash: true,
};

const seo = {
  title: "Lavish's Portfolio",
  description:
    "I am a full-stack developer creating powerful web solutions for a smooth and intuitive user experience.",
  og: {
    title: "Lavish Meena Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Lavish Meena",
  logo_name: "LavishMeena",
  nickname: "",
  subTitle:
    "I am a full-stack developer creating powerful web solutions for a smooth and intuitive user experience.",
  resumeLink:
    "https://drive.google.com/file/d/1TBE0QbMyPKHrFz-6nCoqcwliieiLuhoV/view",
  portfolio_repository: "https://github.com/lavishmeena2764/portfolio",
  githubProfile: "https://github.com/lavishmeena2764",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/lavishmeena2764",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lavish-meena/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:lavishmeena2764@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/lavishmeena2764",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/lavish.lmmeena/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/lavish__meena/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing web applications using ReactJS, HTML/CSS and JavaScript",
        "⚡ Creating application backend in Springboot, Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/indian_07/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/lavish_meena",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/indian_07",
    },
    {
      siteName: "GFG",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/indian_07/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology, Allahabad",
      subtitle: "B.Tech. in Electronics and Communication Engineering",
      logo_path: "iiita_logo.jpeg",
      alt_name: "IIIT Allahabad",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core ECE subjects like Digital Electronics, Analog Circuits, Signals & Systems, Communication Systems, and VLSI.",
        "⚡ Gained expertise in Embedded Systems, Microprocessors, Control Systems, and Circuit Simulation.",
        "⚡ Gained expertise in Computer Fundamentals subjects such as Data Structures and Algorithms, Computer Networks, etc."
      ],
      website_link: "http://iiita.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ReactJs - The Complete ReactJs Course For Beginners",
      subtitle: "- Sara Academy",
      logo_path: "udemy_logo.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c7148548-3fc6-4484-9952-a829138fc826/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Database Management System Excellence",
      subtitle: "- Prabh Kirpa Classes",
      logo_path: "udemy_logo.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-4d3627c6-c850-4b8f-8b1c-9fe38fa8e367/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Python And Django Framework For Beginners Complete Course",
      subtitle: "- Horizon Tech",
      logo_path: "udemy_logo.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-23739a38-3d64-4d4f-a0ea-2c236bb556ce/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },{
      title: "Mastering Data Structures & Algorithms using C and C++",
      subtitle: "- Abdul Bari",
      logo_path: "udemy_logo.jpg",
      certificate_link:
        "",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },{
      title: "The Complete Python Bootcamp from Zero to Expert",
      subtitle: "- Sara Academy",
      logo_path: "udemy_logo.jpg",
      certificate_link:
        "",
      alt_name: "Udemy",
      color_code: "#A435F0",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Positions of Responsibility",
  description:
    "I have worked in a startup as a Full-Stack Web Developer and have also held Positions of Responsibility in various college technical societies, conducting workshops and hackathons, contributing to events and technical initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "Global Pathfinders",
          company_url: "https://globalpathfinders.co.in",
          logo_path: "gp_logo.jpg",
          duration: "Jun 2024 - Jul 2024",
          location: "Remote",
          description:
            "I worked as a Full-Stack Web Developer at Global PathFinders, where I designed and developed their website using the MERN stack. I ensured a sleek, modern UI while managing deployment on a KVM 2 VPS server for a robust and scalable infrastructure.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Positions of Responsibility",
      experiences: [
        {
          title: "Google Developer Student Club",
          company: "Web Development - Coordinator",
          company_url: "https://gdsc.iiita.ac.in",
          logo_path: "google_logo.png",
          duration: "Sept 2024 - Present",
          location: "",
          description:
            "Led a team of GDSC members to redesign the official GDSC website, improving user engagement by 30%. Additionally, I organized workshops to teach various domains of development and created websites for multiple events held under GDSC.",
          color: "#4285F4",
        },
        {
          title: "Alumni's Sangam Student Interaction Cell",
          company: "Web Development - Coordinator",
          company_url: "https://assic.iiita.ac.in",
          logo_path: "iiita_logo.png",
          duration: "Aug 2024 - Present",
          location: "",
          description:
            "Collaborated with a team to engineer the official website of ASSIC. Additionally, I contributed to the organization of GAM 2023, GVAM 2023, and the Silver Jubilee Alumni Meet 2024, which attracted over 1,000 alumni.",
          color: "#D83B01",
        },
        {
          title: "Prayaas",
          company: "Volunteer",
          company_url: "https://prayaas.iiita.ac.in/",
          logo_path: "prayaas.jpeg",
          duration: "Nov 2022 - Present",
          location: "",
          description:
            "Prayaas is a student-driven social initiative at IIIT Allahabad dedicated to imparting education to underprivileged children and actively engaging in various welfare activities to make a positive impact on society.",
          color: "#000000",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications projects and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "lavish.jpg",
    description:
      "I am available on almost all social media platforms. Feel free to reach out. I bring expertise in Full-Stack Development (MERN), Springboot, Java, and Open-Source Development and am eager to contribute my skills to impactful projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I enjoy sharing technical insights through blogs. I have written about cool hacks and development tips aiming to make complex concepts more accessible.",
    link: "https://lavishmeena.blogspot.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sri Ganganagar, Rajasthan",
    locality: "Sri Ganganagar",
    country: "India",
    region: "Rajasthan",
    postalCode: "335001",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/obnfrpNhpxqmHkbV9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
