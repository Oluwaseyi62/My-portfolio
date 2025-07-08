export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform for a clothing brand",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, track orders and secure checkout.",
    image: '/images/bot5.png',
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://bangontrend.top",
    githubUrl: "https://github.com/Oluwaseyi62/Bot-website.git"
  },
  {
    id: 2,
    title: "E-Commerce website for dolevian clothing brand",
    description: "An Interactive web application showcasing products with a focus on user experience, featuring product filtering, cart functionality, and secure checkout.",
    image: "/images/Dole4.jpg",
    category: "web",
    technologies: ["React", "D3.js", "Firebase", "Material-UI"],
    liveUrl: "https://musical-alpaca-502a93.netlify.app/",
    githubUrl: "https://github.com/Oluwaseyi62/Dole-revamp.git"
  },
  {
    id: 3,
    title: "An e-commerce website for sustainable shopping",
    description: "ECOBUY is a forward-thinking marketplace dedicated to making eco-friendly living accessible and affordable for everyone.",
    image: "/images/Ecobuy.jpg",
    category: "web",
    technologies: ["React", "Typescript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://ecobuyy.netlify.app/",
    githubUrl: ""
  },
  {
    id: 4,
    title: "Weather Forecast",
    description: "Minimalist weather application providing current conditions and 7-day forecasts with beautiful UI.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["JavaScript", "OpenWeather API", "HTML5", "CSS3"],
    liveUrl: "https://unique-shortbread-5cb5e2.netlify.app/",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Mason custard",
    description: "Full-featured custard website with featuring product filtering, cart functionality, and secure checkout.",
    image: "/images/Custard.jpg",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Provider", "Health API"],
    liveUrl: "https://resonant-tarsier-6a651d.netlify.app/",
    githubUrl: ""
  },
  
  {
    id: 6,
    title: "DevLink",
    description: "Create a stunning link-in-bio profile that showcases your coding journey. Connect GitHub, display live stats, and share your developer story in one place.",
    image: "/images/DevLink.jpg",
    category: "Web",
    technologies: ["Figma", "React", "TypeScript"],
    liveUrl: "https://gilded-cassata-e7595e.netlify.app/",
    githubUrl: ""
  }
];