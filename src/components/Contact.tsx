
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import Button from './ui-custom/Button';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally handle the form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="text-primary text-sm font-semibold uppercase tracking-wider mb-3 opacity-0 animate-fade-in">
              Get In Touch
            </h4>
            <h2 className="mb-6 opacity-0 animate-fade-in animate-delay-100">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-200">
              Contact us today to discuss how our AI workflow solutions and expert consultation can help your organization achieve its goals.
            </p>
            
            <div className="space-y-4 mb-8 opacity-0 animate-fade-in animate-delay-300">
              {[
                { icon: Mail, text: "hello@nexusai.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "123 Innovation Way, Tech City, CA 94103" }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-right">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full">
                  <MessageSquare size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
