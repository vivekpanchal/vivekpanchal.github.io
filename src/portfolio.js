
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Vivek Panchal",
  title: "Hi all, I'm Vivek",
  subTitle: emoji("A passionate Android  Developer 🚀  having an experience of building  Mobile 📱 applications with Best Practices, and cool libraries."),
  resumeLink: "https://drive.google.com/open?id=1sK66cnPkKOO43sIhNcpGjAlTf1o0wvKj"
};


// Your Social Media Link
const socialMediaLinks = {

  github: "https://github.com/vivekpanchal",
  linkedin: "https://www.linkedin.com/in/vivek-panchal-developer/",
  gmail: "vivekpanchal64@gmail.com",
  facebook: "https://www.facebook.com/vivekpunkster",
  instagram: "https://www.instagram.com/vivekpanchal64/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY ANDROID DEVELOPER WHO WANTS TO Build AWESOME APPS",
  skills: [
    emoji("⚡ Develop beautiful  User Interfaces for your mobile applications"),
    emoji("⚡ Building Apps with Best Practices and Architecture like MVVM,MVP "),
    emoji("⚡ Knowledge of Rx java, Dagger 2,Retrofit,Glide,Okhttp.. etc"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS ")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
  
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "NzE1NGRkZWJlNGU5NzBiNjM0NGZlMjY0ODM4OGMyNGNkZDE3Yjc5ZA",
  githubUserName: "vivekpanchal",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};



// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Certified Android Developer",
      subtitle: "Google Certified Android Developer",
      image:
        "https://appgambit.com/images/badges/11.png",
      footerLink: [
        { name: "Certification", url: "https://www.credential.net/6b2e9cbd-87cc-4da0-a9dd-d2972e91a1c6?key=32809462c83d9a2519f3a3fed015f4f147f6a9bb121f6c53b8a58dd0ea54fdb5" },
       
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action on Dragon Ballz  that is available on 2 Billion devices world wide with 4.8 rating.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/00000039ba88947e?hl=en-US&source=web" }]
    },

    {
      title: "Udacity Android NanoDegree Holder",
      subtitle: "Completed Certifcation For Android Developer NanoDegree From Udacity",
      image: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/247c6599-6d95-44bd-abea-ab392ccc7819.svg",
      footerLink: [
        { name: "Certification", url: "https://confirm.udacity.com/ZRLEVLYW" },
        { name: "Final Project", url: "https://github.com/vivekpanchal/NewsHUB" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

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
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919968864537",
  email_address: "vivekpanchal64@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, openSource, achievementSection, blogSection, contactInfo};
