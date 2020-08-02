import emoji from "react-easy-emoji";

const greeting = {
  username: "Karthikeyan",
  title: "Hi all, I'm Karthik",
  subTitle: emoji(
    "A passionate Software Developer 🚀 looking for oppurtunities to build Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/kar12thik",
  linkedin: "https://www.linkedin.com/in/kar12thik/",
  gmail: "skarthik.chennai@gmail.com",
};

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Experience encompassing multiple areas of technology on Tandem, Windows and Linux with complete Software Development Life Cycle (analysis, design, programming, testing, customer support)."
    ),
    emoji(
      "⚡ Excited to be at the deployment phase of my new career as a full stack web developer. Certified in both F/E and B/E technologies."
    ),
    emoji(
      "⚡ Want to develop highly interactive Front end / Back end for your applications"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "75%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "75%",
    },
  ],
};

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      role: "Senior Software Developer",
      company: "Wipro Technologies",
      companylogo: require("./assets/images/Wipro"),
      date: "June 2017 – Present",
      desc:
        "The MasterCard Debit Switch (MDS) is Mastercards Tandem based Electronic Funds Transfer (EFT) network processing system. It provides processing support to several MasterCard programs including MasterCard /Maestro / Cirrus ATM Network, MasterCard Debit Card, Maestro point-of-sale-debit programs, web based payment and CHIP based products. This project is an application development project starting with analysis of release requirements, design, development, unit testing and implementation.",
      descBullets: [
        "An ongoing project, working on function requirement, design and development of the core process.",
        "Analyzed code to identify bottlenecks & contingencies and streamlined code to reducing issues and support costs",
        "Analyzed on functional requirement. Preparing High level and Low level design document",
        "Worked closely with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability and performance.",
      ],
    },
  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kar12thik",
  showGithubProfile: "true",
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Got a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8939003172",
  email_address: "skarthik.chennai@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  contactInfo,
};
