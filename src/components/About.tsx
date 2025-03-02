
import Button from './ui-custom/Button';
import { Check } from 'lucide-react';

const About = () => {
  const benefits = [
    "Industry-leading AI expertise",
    "Custom solutions tailored to your needs",
    "Seamless integration with existing systems",
    "Ongoing support and optimization",
    "Data privacy and security focus",
    "Scalable solutions that grow with you"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-6 transform-gpu"></div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 opacity-0 animate-fade-in">
              About Us
            </h4>
            <h2 className="mb-6 opacity-0 animate-fade-in animate-delay-100">
              Transforming Businesses Through AI Innovation
            </h2>
            <p className="text-muted-foreground mb-6 opacity-0 animate-fade-in animate-delay-200">
              At NexusAI, we believe in the transformative power of artificial intelligence to solve complex business challenges. Our team of AI experts, software engineers, and business consultants work together to deliver solutions that drive real results.
            </p>
            <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-300">
              Founded on principles of excellence, innovation, and client partnership, we're committed to helping organizations leverage AI to achieve operational efficiency, enhance decision-making, and create competitive advantages.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 opacity-0 animate-fade-in animate-delay-400">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <Check size={18} className="text-primary" />
                  </div>
                  <p className="text-base">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="opacity-0 animate-fade-in animate-delay-500">
              Our Approach
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in">
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3870&auto=format&fit=crop" 
                  alt="Team working on AI solutions" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-xl overflow-hidden shadow-lg rotate-6 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=3870&auto=format&fit=crop" 
                  alt="Code on screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
