
import { Brain, Code, Users, ArrowRight, Server, LineChart, Shield, Globe, Settings, Wifi } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui-custom/Card';
import Button from './ui-custom/Button';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Brain,
    title: "AI Workflow Automation",
    description: "Streamline complex business processes with intelligent automation that adapts to your organization's needs.",
    link: "#"
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "Connect and automate physical devices with smart IoT systems powered by AI for real-time monitoring and control.",
    link: "#"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Bespoke software solutions engineered to solve your specific business challenges with precision.",
    link: "#"
  },
  {
    icon: Users,
    title: "AI Strategy Consultation",
    description: "Expert guidance on implementing AI initiatives that align with your business objectives.",
    link: "#"
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions designed for optimal AI performance and reliability.",
    link: "#"
  },
  {
    icon: LineChart,
    title: "Data Analytics & Insights",
    description: "Transform raw data into actionable intelligence with advanced analytics solutions.",
    link: "#"
  },
  {
    icon: Shield,
    title: "AI Governance & Ethics",
    description: "Ensure your AI implementations are responsible, transparent, and aligned with ethical guidelines.",
    link: "#"
  },
  {
    icon: Globe,
    title: "Enterprise Integration",
    description: "Seamlessly connect AI workflows with your existing enterprise software ecosystem.",
    link: "#"
  },
  {
    icon: Settings,
    title: "AI Maintenance & Support",
    description: "Continuous optimization and support to ensure your AI solutions evolve with your business.",
    link: "#"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 opacity-0 animate-fade-in">
            Our Services
          </h4>
          <h2 className="mb-6 opacity-0 animate-fade-in animate-delay-100">
            Comprehensive AI, IoT & Software Solutions
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in animate-delay-200">
            We offer a full spectrum of services to help businesses harness the power of artificial intelligence, IoT connectivity, and custom software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              variant="glass"
              className={cn(
                "opacity-0 animate-fade-in transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group"
              )}
              // Using data-animation-delay attribute instead of style for animation delay
              data-animation-delay={`${(index * 100) + 300}ms`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href={service.link}
                  className="text-primary font-medium inline-flex items-center group-hover:underline"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in animate-delay-500">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Looking for a customized solution that's not listed here? We specialize in creating bespoke AI and IoT solutions tailored to your unique business needs.
          </p>
          <Button size="lg">
            Request Custom Solution
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
