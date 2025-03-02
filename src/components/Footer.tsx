
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "AI Workflow", href: "#" },
        { name: "Software Development", href: "#" },
        { name: "AI Consultation", href: "#" },
        { name: "Cloud Infrastructure", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "FAQs", href: "#" },
      ]
    }
  ];
  
  return (
    <footer className="bg-secondary/70 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="font-semibold text-2xl block mb-4">
              C Brain Solution
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through intelligent AI workflows, expert consultation, and innovative software solutions.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg hover:brightness-110 transition-all flex items-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} C Brain Solution. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
