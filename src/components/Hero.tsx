import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Oluwaseyi';
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (text.length > 0) {
          setText(fullText.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };
    
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

 
  return (
    <section 
      id="home" 
      className="flex items-center min-h-screen pt-20 bg-gradient-to-b from-neutral-50 to-neutral-100"
    >
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="order-2 lg:w-1/2 lg:order-1 animate-fadeIn">
            <p className="mb-4 font-medium tracking-wide text-primary-600">Hello, I'm</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl text-neutral-900">
              Ayoade <span className="text-primary-600 typing-text">{text}</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed sm:text-2xl text-neutral-700">
            Frontend Developer focused on creating elegant, responsive, and intuitive digital interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-8 py-3 font-medium text-white transition-all duration-300 transform rounded-md shadow-lg btn-primary bg-primary-600 hover:bg-primary-700 hover:shadow-xl hover:-translate-y-1"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 font-medium transition-all duration-300 border-2 rounded-md btn-secondary text-primary-600 border-primary-600 hover:bg-primary-50"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Oluwaseyi62" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-neutral-700 hover:text-primary-600"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ayoade-oluwaseyi-045084262/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-neutral-700 hover:text-primary-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:oluwaseyiayoade62@gmail.com"
                className="transition-colors duration-300 text-neutral-700 hover:text-primary-600"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:w-1/2 lg:order-2 animate-fadeIn animation-delay-300">
            <div className="relative">
              <div className="w-64 h-64 overflow-hidden border-4 border-white rounded-full shadow-xl sm:w-80 sm:h-80">
                <img 
                  src="./images/Dan.jpg" 
                  alt="Ayoade Oluwaseyi" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute p-3 bg-white rounded-full shadow-lg -bottom-4 -right-4">
                <div className="flex items-center justify-center w-16 h-16 font-bold text-white rounded-full bg-success-500">
                  <span>Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;