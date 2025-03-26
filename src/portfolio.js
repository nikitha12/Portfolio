/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nikitha's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nikitha Nimbalkar Portfolio",
    type: "website",
    url: "http://nikithanimbalkar.com/",
  },
};

//Home Page
const greeting = {
  title: "Nikitha Nimbalkar",
  logo_name: "Nikitha Nimbalkar",
  nickname: "Nikki",
  subTitle: `A passionate individual with 6 years of experience in software development experience.\n Proven expertise in designing, developing and deploying scalable, high performance applications.\n Specialization in building end to end cloud applications which creates an impact. With domain experties in  Web-data crawling, processing of eCommerce platforms, and Catalog Platforms. Strong problem-solving skills and a passion for continuous learning.`,
  resumeLink:
    "https://drive.google.com/file/d/1keQNLS1ClGseTNYm6ZGvCMc-OgWb6Hgt/view?usp=sharing",
  portfolio_repository: "https://github.com/nikitha12/Portfolio",
  githubProfile: "https://github.com/nikitha12",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nikitha12",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nikitha-nimbalkar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nikitha.nimbalkar05@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Back End Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Scalable Cloud Application Development: Designed, develop, and maintain scalable cloud-based applications.",
        "⚡ Java Backend Development: Creating application backend in Java, Spring Boot, Microservices.",
        "⚡ Data Storage and Optimization: Manage and optimize data storage with relational databases and caching strategies.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#15B622",
          },
        },
        {
          skillName: "MicroServices",
          imageSrc: "microservices.png",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Openapi",
          fontAwesomeClassname: "devicon:openapi",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "devicon:hibernate",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Postgres",
          fontAwesomeClassname: "devicon:postgresql",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "devicon:junit",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "devicon:maven",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "IntelliJ",
          fontAwesomeClassname: "devicon:intellij",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Full-Stack Application Development: Builds seamless applications, connecting Node.js/Express.js backends with Angular frontends and deploying in GCP.",
        "⚡ RESTful API Design: Proficient in designing and building RESTful APIs, adhering to best practices for resource management and data exchange.",
        "⚡ Security Implementation: Skilled in implementing security measures, including authentication and authorization.",
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
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
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
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
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
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ GCP Application Deployment & Management: Deploy, manage, and monitor applications on GCP using GKE, Cloud Functions, Cloud Monitoring, and Cloud Logging.",
        "⚡ VM Website and Database Management: Host and maintain websites on virtual machine instances, integrating databases as needed.",
        "⚡ GCP Service Integration with Java: Integrate GCP services like Cloud Postgres, Cloud Storage, and Pub/Sub with Java applications using client libraries.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Cloud Functions",
          fontAwesomeClassname: "logos:google-cloud-functions",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "PubSub",
          imageSrc: "pubsub.png",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Google Cloud Storage",
          imageSrc: "googlecloudstorage.png",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Google Big Query",
          imageSrc: "googlebigquery.png",
          style: {
            color: "#47A248",
          },
        },

        {
          skillName: "Cloud Memory Store",
          imageSrc: "cloudmemorystore.png",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Google Kubernetes Engine",
          imageSrc: "googlekubernetesengine.png",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Web Scraping Specialist",
      fileName: "WebScrapingImg",
      skills: [
        "⚡ Scalable Web Crawling : Engineered a Java Spring Boot platform, designed to efficiently process a high volume of 5 million web pages daily.",
        "⚡ Dynamic Data Extraction : Leveraged Node.js and Puppeteer to reliably extract data from JavaScript-heavy websites, handling complex client-side interactions.",
        "⚡ Integrated Data Pipelines : Developed and integrated various APIs, creating seamless data acquisition and processing workflows for efficient data handling.",
      ],
      softwareSkills: [
        {
          skillName: "Puppeteer",
          fontAwesomeClassname: "devicon:puppeteer",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Playwright",
          fontAwesomeClassname: "devicon:playwright",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "logos:selenium",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Axios",
          fontAwesomeClassname: "devicon-plain:axios",
          style: {
            color: "#7F00FF",
          },
        },
        {
          skillName: "Jsoup",
          imageSrc: "jsoup.png",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Beautiful Soup",
          imageSrc: "beautifulsoup.png",
          style: {
            color: "#FFCA28",
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
      profileLink: "https://leetcode.com/u/nikki_nimbalkar/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/nikki_nimbalkar",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/nikki_nimbalkar",
    },
  ],
};

const degrees = {
  degrees: [
    {
      college: "BMS College Of Engineering",
      title: "B.E in Electronics and Communication Engineering",
      logo_path: "bmsce.png",
      alt_name: "BMSCE",
      duration: "2014 - 2018",
      descriptions: [
        "⚡ GPA: 9.28/10",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS etc.",
        "⚡ Projects: Edge avoider & Puzzle Solver Robot, Vehicle Tracking System, Smart agriculture",
      ],
      website_link: "https://www.bmsce.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// const certifications = {
//     certifications: [{
//             title: "Machine Learning",
//             subtitle: "- Andrew Ng",
//             logo_path: "stanford_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//             alt_name: "Stanford University",
//             color_code: "#8C151599",
//         },
//         {
//             title: "Deep Learning",
//             subtitle: "- Andrew Ng",
//             logo_path: "deeplearning_ai_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//             alt_name: "deeplearning.ai",
//             color_code: "#00000099",
//         },
//         {
//             title: "ML on GCP",
//             subtitle: "- GCP Training",
//             logo_path: "google_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//             alt_name: "Google",
//             color_code: "#0C9D5899",
//         },
//         {
//             title: "Data Science",
//             subtitle: "- Alex Aklson",
//             logo_path: "ibm_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//             alt_name: "IBM",
//             color_code: "#1F70C199",
//         },
//         {
//             title: "Big Data",
//             subtitle: "- Kim Akers",
//             logo_path: "microsoft_logo.png",
//             certificate_link: "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//             alt_name: "Microsoft",
//             color_code: "#D83B0199",
//         },
//         {
//             title: "Advanced Data Science",
//             subtitle: "- Romeo Kienzler",
//             logo_path: "ibm_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//             alt_name: "IBM",
//             color_code: "#1F70C199",
//         },
//         {
//             title: "Advanced ML on GCP",
//             subtitle: "- GCP Training",
//             logo_path: "google_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//             alt_name: "Google",
//             color_code: "#0C9D5899",
//         },
//         {
//             title: "DL on Tensorflow",
//             subtitle: "- Laurence Moroney",
//             logo_path: "deeplearning_ai_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//             alt_name: "deeplearning.ai",
//             color_code: "#00000099",
//         },
//         {
//             title: "Fullstack Development",
//             subtitle: "- Jogesh Muppala",
//             logo_path: "coursera_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//             alt_name: "Coursera",
//             color_code: "#2A73CC",
//         },
//         {
//             title: "Kuberenetes on GCP",
//             subtitle: "- Qwiklabs",
//             logo_path: "gcp_logo.png",
//             certificate_link: "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//             alt_name: "GCP",
//             color_code: "#4285F499",
//         },
//         {
//             title: "Cryptography",
//             subtitle: "- Saurabh Mukhopadhyay",
//             logo_path: "nptel_logo.png",
//             certificate_link: "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//             alt_name: "NPTEL",
//             color_code: "#FFBB0099",
//         },
//         {
//             title: "Cloud Architecture",
//             subtitle: "- Qwiklabs",
//             logo_path: "gcp_logo.png",
//             certificate_link: "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//             alt_name: "GCP",
//             color_code: "#4285F499",
//         },
//     ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Diligent software engineer with 6+ years of experience in application development. Eager to build innovative and cutting-edge business solutions. I am keen on exploring and learning new technology and enhancing my skills to provide better efficiency in my work.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "STAFF SOFTWARE ENGINEER ",
          company: "IBM India Software Labs.",
          company_url: "https://www.ibm.com/in-en",
          logo_path: "ibm_logo.png",
          duration: "April 2024 - Jan 2025",
          location: "Bengaluru, India",
          description: [
            "Delivered and maintained highly scalable software applications across diverse platforms.",
            "Shared expertise through mentoring and participating in critical technical discussions.",
            "Analyzed user requirements, Streamlined system functionality through third-party APIs and developed software solutions.",
            "Developed, tested, and maintained software applications using Node.js.",
          ],
          color: "#000000",
        },
        {
          title: "SENIOR SOFTWARE ENGINEER I",
          company: "Rakuten",
          company_url: "https://corp.rakuten.co.in/",
          logo_path: "rakuten_logo.png",
          duration: "Jan 2022 - March 2024",
          location: "Bengaluru, India",
          description: [
            `Designed and Developed a Scalable Crawling Platform: A cloud-based infrastructure capable of processing 5 million web pages daily.`,
            "Implemented Stream-based Microservice Architecture: Each module was a Spring Boot-based application.",
            "Optimized Data Storage Architecture: Collaborated with a team to achieve a 10% reduction in storage costs.",
            "Conducted code reviews and mentored junior developers, improving code quality and team productivity.",
          ],
          color: "#0879bf",
        },
        {
          title: "SOFTWARE ENGINEER - I AND II ",
          company: "Rakuten",
          company_url: "https://corp.rakuten.co.in/",
          logo_path: "rakuten_logo.png",
          duration: "Dec 2020 - Dec 2021",
          location: "Bengaluru, India",
          description: [
            "Java and Node js Developer: Specialized in Crawling and Catalog platforms",
            "Contributed to Feature Development: Developed a JAVA crawler handling over 100 stores",
            "Migrated Legacy Crawler: Successfully migrated 20 stores to a generic configuration-based crawler, replacing customized scripts",
            "Debugging and Minor Feature Development: Assisted with catalog platform, supporting around 2130 stores",
          ],
          color: "#0879bf",
        },
        {
          title: "ASSOCIATE SOFTWARE ENGINEER",
          company: "Rakuten",
          company_url: "https://corp.rakuten.co.in/",
          logo_path: "rakuten_logo.png",
          duration: "June 2018 - Dec 2020",
          location: "Bengaluru, India",
          description: [
            "Puppeteer Crawler Development: Created Node JS Puppeteer crawler for onboarding 30 JS-enabled websites",
            "Catalog Platform Maintenance: Handled minor feature requests from clients on the catalog platform",
            "Data Quality Measurement: Designed REST APIs to assess data quality and built a dashboard for analysis across system components.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "SOFTWARE DEVELOPMENT INTERN",
          company: "Rakuten",
          company_url: "https://corp.rakuten.co.in/",
          logo_path: "rakuten_logo.png",
          duration: "Jan 2022 - March 2024",
          location: "Bengaluru, India",
          description: [
            "Blockchain-Based KYC POC: Developed a proof of concept for a Know Your Customer (KYC) application on the blockchain",
            "Explored Various Blockchain Platforms: Researched and analyzed Ethereum and Multichain for application development",
            "Multichain P2P Token Exchange POC: Conducted research and created a proof of concept for a blockchain application facilitating P2P crypto token exchange on Multichain.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Software Developer",
          company: "Robin Hood Army",
          company_url: "https://robinhoodarmy.com/",
          logo_path: "robinhoodarmy_logo.png",
          duration: "Jan 2022 - March 2024",
          location: "Bengaluru, India",
          description: [
            "Developed a web application to help the organization distribute excess food to the needy",
            "The web application was build with node js Backend and Angular Frontend and was deployed on firebase",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My Projects are mostly my skill learings documented as repositories. I have worked on hand on projects building applications & deploying them. ",
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
    profile_image_path: "animated_nikitha.png",
    description:
      "I am available on Linked In. I will reply within 24 hours. Or Contact me over e-mail",
  },

  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.nikithanimbalkar.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
