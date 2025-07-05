
import one from "../assets/svg/projects/social.png";
import two from "../assets/svg/projects/crm.png";
import three from "../assets/svg/projects/rent.png";
import four from "../assets/svg/projects/four.svg";
import six from "../assets/svg/projects/wheather.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Social Smart AI",
    projectDesc:
      "An AI-powered social media assistant that provides image generation, hashtag research, influencer discovery, and optimized content recommendations.",
    tags: ["React Native", "Firebase", "Open AI", "Tailwind"],
    code: "https://github.com/Yaseenkhan112233/social-media-manager-",
    demo: "",
    image: one,
  },
  {
    id: 2,
    projectName: "CRM System",
    projectDesc:
      "A customer relationship management (CRM) system that helps manage clients, track interactions, and organize sales pipelines. Built with React for UI and Firebase for real-time data handling and authentication.",
    tags: ["React", "Firebase", "Tailwind"],
    code: "https://github.com/Yaseenkhan112233/accountmanagementsystem", // Replace with actual link if different
    demo: "https://accountmanagementsystem.vercel.app/", // Add demo URL if available
    image: two,
  },

  {
    id: 3,
    projectName: "Rental Website",
    projectDesc:
      "A responsive and feature-rich rental platform built using React to list, explore, and book rental properties. Includes user-friendly UI, category filtering, and property details pages.",
    tags: ["React", "Tailwind", "JavaScript"],
    code: "https://github.com/Yaseenkhan112233/rental-system-", // <-- replace with correct link if needed
    demo: "https://rental-system-snhk.vercel.app/", // add demo URL if available
    image: three,
  },

  {
    id: 5,
    projectName: "React Native Weather App",
    projectDesc:
      "A responsive weather forecast application built with React and OpenWeatherMap API.",
    tags: ["React Native", "API", "firebase", "CSS"],
    code: "https://github.com/Yaseenkhan112233/wheather-app",
    demo: "",
    image: six,
  },
  {
    id: 4,
    projectName: "OpenAI Backend Integration",
    projectDesc:
      "A backend service built with Express.js that integrates OpenAI's API to generate dynamic responses, text completions, and handle prompt-based requests securely. Designed for AI-powered applications and scalable integrations.",
    tags: ["Express", "Node.js", "OpenAI API"],
    code: "https://github.com/Yaseenkhan112233/open-ai-backend", // Replace with your actual repo link
    demo: "", // Add demo if available (e.g., Postman collection, endpoint)
    image: four, // Use a relevant image from your assets folder
  },
];
