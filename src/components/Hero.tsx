
import { ArrowRight, Brain, Code, Sparkles, Wifi } from 'lucide-react';
import Button from './ui-custom/Button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      <div className="container-custom relative">
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-70 animate-pulse-soft"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary border border-border mb-6 opacity-0 animate-fade-in">
            <Sparkles size={14} className="mr-2 text-primary" />
            <span className="text-sm font-medium">Redefining AI & IoT Solutions</span>
          </div>
          
          {/* Headline */}
          <h1 className="mb-6 opacity-0 animate-fade-in animate-delay-100 text-balance">
            <span className="block">Transform Your Business with</span>
            <span className="text-primary">Intelligent AI & IoT Workflows</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200 text-balance">
            We combine cutting-edge AI technologies with IoT integration to create powerful automation solutions that drive innovation and efficiency in the physical and digital world.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 opacity-0 animate-fade-in animate-delay-300">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          
          {/* Features Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-400">
            {[
              { icon: Brain, label: "AI Workflow Automation" },
              { icon: Wifi, label: "IoT Integration" },
              { icon: Code, label: "Custom Software Development" },
              { icon: Sparkles, label: "Strategic AI Consultation" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "px-6 py-4 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:shadow-md",
                )}
              >
                <feature.icon className="mr-2 text-primary" size={18} />
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
