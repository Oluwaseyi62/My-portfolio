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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop functionality, team assignments, and progress tracking.",
    image: "https://images.pexels.com/photos/5926398/pexels-photo-5926398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "Redux", "Firebase", "Styled Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Weather Forecast",
    description: "Minimalist weather application providing current conditions and 7-day forecasts with beautiful UI.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["JavaScript", "OpenWeather API", "HTML5", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Full-featured fitness application with workout tracking, progress visualization, and social sharing.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Provider", "Health API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 6,
    title: "Portfolio Design System",
    description: "A comprehensive design system with reusable components, documentation, and implementation guidelines.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ui/ux",
    technologies: ["Figma", "Storybook", "React", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];