/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shifa.Khan",
  title: "Hi all, I'm Shifa",
  subTitle: emoji(
    "A passionate Java Developer 🚀 with hands-on experience in building web applications using Java, Spring Boot, and MySQL, along with front-end technologies like HTML, CSS, JavaScript, and Bootstrap. I enjoy turning ideas into real-world solutions and continuously strive to improve my skills. My focus lies in backend development and crafting efficient, scalable, and secure applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shifakhan-11045",
  linkedin: "https://www.linkedin.com/in/shifa-khan-wef/",
  gmail: "shifakhan11045@gmail.com",
 
  
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY  DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
 skills: [
    emoji("⚡ Develop desktop and web applications using Java and Spring Boot"),
    emoji("⚡ Build RESTful APIs with Java and integrate frontend & backend"),
    emoji("⚡ Create real-time chat, issue-reporting, and barter system apps"),
    emoji("⚡ Develop responsive web interfaces using HTML, CSS, JS, and Bootstrap"),
    emoji("⚡ Manage databases with MySQL and integrate with backend services"),
    emoji("⚡ Familiar with GitHub, Git, and deploying static websites"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chameli Devi Group of Institutions",
      logo: require("./assets/images/cdgi.png"),
      subHeader: "Bachelor of computer Science and Engineering ",
      duration: "August 2022 - May 2026",
      desc: "CGPA: 7.72",
      
    },
    {
      schoolName: "New Taleem H.S. School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Higher Secondary Education",
      duration: "2021 - 2022",
      desc: "CGPA: 7.96",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Java Developer",
      company: "Codtech IT Solutions",
      companylogo: require("./assets/images/cod.png"),
      date: "Feb 2025 – April 2025",
      desc: "Developed a real-time chat application using Java, Spring Boot, and WebSocket for seamless communication.Designed and implemented REST APIs, user authentication, and message persistence using MySQL.",
      descBullets: [
        "Built backend logic and WebSocket integration for real-time messaging.",

        "Managed user sessions and database interaction using Spring Boot."


        
      ]
    },
    {
      role: "Mern Stack Developer",
      company: "Ypsilon IT Solutions",
      companylogo: require("./assets/images/it.png"),
      date: "March 2025 – April 2025 ",
      desc: "Created a barter system platform using MongoDB, Express.js, React.js, and Node.js, allowing users to exchange goods without currency.Designed responsive UI and integrated backend APIs with secure authentication.",
      descBullets: [
        "Implemented item listing, search, and user-based barter matching logic.",

        "Handled API routes, user data, and database transactions in MongoDB."


        
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/cc.png"),
      projectName: "Campus Care",
      projectDesc: "A web app for college students to anonymously report issues.Ensures privacy with a user-friendly interface.\nTech Stack: HTML, CSS, JavaScript, Java, MySQL"
      
        //  you can add extra buttons here.
      
    },

    {
      image: require("./assets/images/bs.jpeg"),
      projectName: "Barter System",
      projectDesc: "A platform where users exchange unused items with others without using money.Facilitates item listing, search, and trade requests.\nTech Stack: MongoDB, Express.js, React.js, Node.js",
      
        //  you can add extra buttons here.
      
    },
    
    {
      image: require("./assets/images/ca.png"),
      projectName: "Chatterly",
      projectDesc: "A real-time chat application for secure one-on-one messaging.Includes login system, chat history, and live updates using WebSocket.\nTech Stack: Java, Spring Boot, WebSocket, MySQL, HTML, CSS, JavaScript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7309995988130111488/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section



// Talks Sections



// Podcast Section


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7745951747",
  email_address: "shifakhan11045@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
