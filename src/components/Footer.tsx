import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 text-white bg-neutral-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Portfolio
            </a>
            <p className="mt-2 text-neutral-400">
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-6 sm:grid-cols-3 md:mb-0">
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Navigation</h4>
              <ul className="space-y-2">
                {['home', 'projects', 'about', 'contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item}`}
                      className="capitalize transition-colors duration-300 text-neutral-400 hover:text-primary-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Connect</h4>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', url: 'https://github.com/Oluwaseyi62' },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayoade-oluwaseyi-045084262/' },
                  { name: 'Twitter', url: 'https://x.com/Ctrl_Alt_Seyi' },
                  { name: 'Dribbble', url: 'https://dribbble.com' }
                ].map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 text-neutral-400 hover:text-primary-400"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="text-neutral-400">
                  Lagos, Nigeria
                </li>
                <li>
                  <a 
                    href="mailto:oluwaseyiayoade62@gmail.com" 
                    className="transition-colors duration-300 text-neutral-400 hover:text-primary-400"
                  >
                    oluwaseyiayoade62@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+234 70 465 155 71" 
                    className="transition-colors duration-300 text-neutral-400 hover:text-primary-400"
                  >
                    +234 70 465 155 71
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 text-white transition-colors duration-300 rounded-full bg-primary-600 hover:bg-primary-700"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-neutral-800 md:flex-row">
          <p className="mb-4 text-neutral-400 md:mb-0">
            © {new Date().getFullYear()} Ayoade Oluwaseyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;