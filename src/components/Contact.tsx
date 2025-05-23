import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ 
        type: 'success', 
        text: 'Your message has been sent successfully! I will get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ type: '', text: '' });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fadeIn">
          <p className="mb-3 font-medium text-primary-600">Get In Touch</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-neutral-900">Contact Me</h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-700">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 animate-fadeIn">
            <div className="h-full p-8 shadow-md bg-neutral-50 rounded-xl">
              <h3 className="mb-6 text-2xl font-bold text-neutral-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-100 text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-neutral-900">Location</h4>
                    <p className="text-neutral-700">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-100 text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-neutral-900">Email</h4>
                    <a href="mailto:oluwaseyiayoade62@gmail.com" className="transition-colors text-neutral-700 hover:text-primary-600">
                      oluwaseyiayoade62@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-100 text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-neutral-900">Phone</h4>
                    <a href="tel:+234 70 465 155 71" className="transition-colors text-neutral-700 hover:text-primary-600">
                      +234 70 465 155 71
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="mb-4 text-lg font-semibold text-neutral-900">Follow Me</h4>
                <div className="flex gap-4">
                  {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-primary-50 text-neutral-700 hover:text-primary-600"
                      aria-label={`Follow on ${social}`}
                    >
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-fadeIn animation-delay-200">
            <div className="p-8 bg-white shadow-md rounded-xl">
              <h3 className="mb-6 text-2xl font-bold text-neutral-900">Send Me a Message</h3>
              
              {submitMessage.text && (
                <div 
                  className={`p-4 mb-6 rounded-lg ${
                    submitMessage.type === 'success' ? 'bg-success-100 text-success-700' : 'bg-error-100 text-error-700'
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-neutral-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border rounded-lg border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-neutral-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-all duration-300 border rounded-lg border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium text-neutral-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 transition-all duration-300 border rounded-lg border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-neutral-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 transition-all duration-300 border rounded-lg resize-none border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-b-2 border-white rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;