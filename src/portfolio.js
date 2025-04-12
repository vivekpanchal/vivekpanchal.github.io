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
  username: "Vivek Panchal",
  title: "Hi , I'm Vivek",
  subTitle: emoji("Android Engineer with 6+ years of experience building high-quality, scalable mobile apps using modern architecture, Jetpack libraries, and Kotlin. Passionate about clean code, performance optimization, and delivering seamless user experiences."),
  resumeLink:"https://drive.google.com/file/d/17LQoYXXLugjJDkCNfvDnsPeM1u6wpZUT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};



// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/vivekpanchal",
  linkedin: "https://www.linkedin.com/in/vivek-panchal-developer/",
  gmail: "vivekpanchal64@gmail.com",
  facebook: "https://www.facebook.com/vivekpanchal64",
  medium: "https://medium.com/@vivekpanchal",
  stackoverflow: "https://stackoverflow.com/users/7685845/vivek-panchal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};



// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "EXPERIENCED ANDROID DEVELOPER WHO LOVES TO BUILD ROBUST AND SCALABLE APPS",
  skills: [
    emoji("⚡ Expert in Clean Architecture, MVVM, MVI, and Repository pattern implementation"),
    emoji("⚡ Deep understanding of Android Jetpack components (ViewModel, LiveData, Room, Navigation, WorkManager)"),
    emoji("⚡ Proficient in Kotlin Coroutines and Flow for asynchronous programming"),
    emoji("⚡ Experience with Dependency Injection (Dagger Hilt, Koin)"),
    emoji("⚡ Strong knowledge of Android performance optimization and memory management"),
    emoji("⚡ Expertise in implementing CI/CD pipelines for Android apps")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "android-jetpack",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-kotlin"
    },
    {
      skillName: "dagger-hilt",
      fontAwesomeClassname: "fas fa-syringe"
    },
    {
      skillName: "compose",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      skillName: "coroutines",
      fontAwesomeClassname: "fas fa-sync"
    },
    {
      skillName: "testing",
      fontAwesomeClassname: "fas fa-vial"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Development", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "95%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false 
};




// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Udacity",
      logo: require("./assets/images/udacity-logo.png"),
      subHeader: "Andorid Developer Nanodegree",
      duration: "September 2017 - April 2019",
      desc: "Participated in Google Udacity scholarship program and won a full scholarship for Android Developer Nanodegree",
      descBullets: [
        "Took part in Google Scholoarship challenges and won a full scholarship for Android Developer Nanodegree",
        "Over 500 students were selected from 10000+ students to win a full scholarship for Android Developer Nanodegree "
      ]
    },
    {
      schoolName: "Maharishi Dyanand University",
      logo: require("./assets/images/mdu_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - May 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};


// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/studyiq.88958bfe.webp"),
      projectName: "StudyIQ",
      projectDesc: "India's leading EdTech Application with over 1M+ users",
      technicalStack: [
        "Clean Architecture with MVVM",
        "Kotlin Coroutines for async operations",
        "Room Database for local storage",
        "Dagger Hilt for dependency injection",
        "Jetpack Compose for modern UI",
        "Firebase Analytics and Crashlytics"
      ],
      achievements: [
        "Reduced app launch time by 30%",
        "Achieved 99.9% crash-free sessions",
        "Implemented efficient offline-first architecture"
      ],
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.studyiq.android&hl=en&gl=US&pli=1"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "TestIQ",
    //   projectDesc: "Provide online Quiz to students to test thier knowledge and help them to prepare for competitive exams.",
    //   footerLink: [
    //     {
    //       name: "Visit App",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Certified Android Developer",
      subtitle: "Advanced Android Development Certification",
      image: require("./assets/images/android_certificate.png"),
      footerLink: [
        {
          name: "Certification",
         url: "https://www.credential.net/6b2e9cbd-87cc-4da0-a9dd-d2972e91a1c6?key=32809462c83d9a2519f3a3fed015f4f147f6a9bb121f6c53b8a58dd0ea54fdb5" },
       
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action on Dragon Ballz  that is available on 2 Billion devices world wide with 4.8 rating.",
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
      title: "Udacity Android NanoDegree Holder",
      subtitle: "Completed Certifcation For Android Developer NanoDegree From Udacity",
      image: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/247c6599-6d95-44bd-abea-ab392ccc7819.svg",

      // image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Udacity Logo",
      footerLink: [
        { name: "Certification", url: "https://confirm.udacity.com/ZRLEVLYW" },
        { name: "Final Project", url: "https://github.com/vivekpanchal/NewsHUB" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", 
  blogs: [
    {
      url: "https://www.androidresource.com/kotlin-for-beginners-part-3-exception-handling-and-null-safety/",
      title: "kotlin tutorials ",
      description: "kotlin tutorials from zero to hero"
    },
    {
      url: "https://medium.com/code-yoga/my-journey-of-google-india-challenge-scholarship-7b772f430161",
      title: "My journey how i became and Android developer",
      description: "My journey on How did i won the google udacity android NanoDegree "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false 
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me! ☎️"),
  subtitle: "Got an exciting project in mind or simply want to chat? I'd love to hear from you! My inbox is always open.",
  number: "+919968864537",
  email_address: "vivekpanchal64@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
