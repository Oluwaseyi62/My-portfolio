import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  const navItems = ['home', 'projects', 'about', 'contact'];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold transition-all duration-300 text-primary-600"
            onClick={closeMenu}
          >
         My Portfolio
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className={`nav-link capitalize text-base font-medium transition-colors duration-300 ${
                      isScrolled ? 'text-neutral-800 hover:text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                    } ${item === 'home' ? 'active' : ''}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className="p-2 transition-colors duration-300 rounded-lg md:hidden hover:bg-neutral-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '60px', height: 'calc(100vh - 60px)' }}
      >
        <nav className="container px-4 py-8 mx-auto">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`}
                  className="relative block px-6 py-4 text-lg font-medium capitalize transition-all duration-300 rounded-lg nav-link text-neutral-800 hover:text-primary-600 hover:bg-neutral-50"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col items-center mt-12">
            <h3 className="mb-6 font-medium text-neutral-500">Connect with me</h3>
            <div className="flex gap-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-neutral-700 hover:text-primary-600"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors duration-300 text-neutral-700 hover:text-primary-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:hello@example.com"
                className="transition-colors duration-300 text-neutral-700 hover:text-primary-600"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;