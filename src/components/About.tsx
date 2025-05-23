import { Code, Palette, Layout, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SCSS', 'JavaScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Vercel', 'GitHub Actions'] },
    { category: 'Design', items: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Responsive Design', 'Accessibility'] }
  ];
  
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fadeIn">
          <p className="mb-3 font-medium text-primary-600">About Me</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-neutral-900">My Journey & Skills</h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-700">
            A passionate developer with a strong focus on creating intuitive, accessible, and beautiful web experiences.
          </p>
        </div>
        
        <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-5">
          <div className="lg:col-span-2 animate-fadeIn">
            <img 
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Working at desk" 
              className="w-full h-auto shadow-lg rounded-xl"
            />
          </div>
          
          <div className="lg:col-span-3 animate-fadeIn animation-delay-200">
            <h3 className="mb-4 text-2xl font-bold text-neutral-900">My Background</h3>
            <p className="mb-6 leading-relaxed text-neutral-700">
            I'm a frontend developer with over 3 years of experience crafting intuitive and high-performance web interfaces. My journey began with a degree in Computer Science, and since then, I've worked with startups and established companies, refining my skills in building responsive, user-friendly frontend experiences.
            </p>
            <p className="mb-6 leading-relaxed text-neutral-700">
            I specialize in translating complex ideas into clean, maintainable code and engaging user interfaces. My focus is on creating visually appealing, accessible, and performant applications that put the user first.
            </p>
            <p className="leading-relaxed text-neutral-700">
            When I’m not bringing designs to life in code, you’ll find me reading, exploring emerging technologies, or contributing to open-source projects. I thrive on solving real-world problems through collaborative development and thoughtful design.
            </p>
          </div>
        </div>
        
        {/* Services/Specialties */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Code size={40} className="text-primary-600" />,
              title: 'Web Development',
              description: 'Building responsive, modern websites with clean code and optimal performance.'
            },
            {
              icon: <Palette size={40} className="text-primary-600" />,
              title: 'UI/UX Design',
              description: 'Creating intuitive interfaces with a focus on user experience and accessibility.'
            },
            {
              icon: <Layout size={40} className="text-primary-600" />,
              title: 'Full-Stack Solutions',
              description: 'Developing end-to-end applications with robust frontend and backend architecture.'
            },
            {
              icon: <Zap size={40} className="text-primary-600" />,
              title: 'Performance Optimization',
              description: 'Enhancing site speed and efficiency for better user engagement and SEO.'
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-neutral-900">{service.title}</h3>
              <p className="text-neutral-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Skills */}
        <div className="animate-fadeIn animation-delay-300">
          <h3 className="mb-8 text-2xl font-bold text-center text-neutral-900">My Skills</h3>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                <h4 className="mb-4 text-lg font-bold text-primary-600">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-neutral-100 text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;