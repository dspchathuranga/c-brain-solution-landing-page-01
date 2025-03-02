
import { Brain, Code, Sparkles, Workflow, Server, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './ui-custom/Button';

const features = [
  {
    icon: Workflow,
    title: "Intelligent Workflow Design",
    description: "Create seamless processes that adapt to your business needs with our AI-powered workflow solutions.",
    className: "sm:col-span-2 md:col-span-1"
  },
  {
    icon: Brain,
    title: "AI Strategy Consultation",
    description: "Gain expert insights on implementing AI in your business to drive innovation and stay ahead of competition.",
    className: "sm:col-span-2 md:col-span-1"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to solve your specific business challenges with precision.",
    className: "sm:col-span-2 md:col-span-1"
  },
  {
    icon: Sparkles,
    title: "Seamless Integration",
    description: "Integrate AI workflows with your existing systems for a unified operational experience.",
    className: "sm:col-span-2 md:col-span-1"
  },
  {
    icon: Server,
    title: "Scalable Infrastructure",
    description: "Build on cloud-native infrastructure that grows with your business needs and demands.",
    className: "sm:col-span-2 md:col-span-1"
  },
  {
    icon: Cpu,
    title: "Automated Decision Intelligence",
    description: "Leverage machine learning to automate complex decision-making processes with confidence.",
    className: "sm:col-span-2 md:col-span-1"
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50 relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 opacity-0 animate-fade-in">
            Our Capabilities
          </h4>
          <h2 className="mb-6 opacity-0 animate-fade-in animate-delay-100">
            Advanced Solutions for Modern Challenges
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-200">
            We combine cutting-edge AI technology with deep industry expertise to deliver transformative solutions that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "p-6 rounded-xl bg-background border border-border transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]",
                feature.className,
                "opacity-0 animate-fade-in"
              )}
              style={{ animationDelay: `${(index * 100) + 300}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in animate-delay-500">
          <Button size="lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
