
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui-custom/Button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'backdrop-blur-md bg-background/90 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <a href="#" className="font-semibold text-xl">
          C Brain Solution
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-lg animate-fade-in border-t border-border">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-2">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
