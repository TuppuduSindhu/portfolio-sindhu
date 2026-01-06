import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:thuppudusindhu@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    toast({
      title: "Opening email client!",
      description: "Your default email application should open shortly."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="blob-decoration w-96 h-96 bg-primary/10 -left-48 top-20" />
      <div className="blob-decoration w-72 h-72 bg-secondary/10 right-0 bottom-0" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-heading">Get In Touch</p>
          
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always excited to connect and discuss opportunities in software development, AI, or web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="mailto:thuppudusindhu@gmail.com" className="card-glass p-4 flex items-center gap-4 hover:border-primary/50 transition-colors group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">thuppudusindhu@gmail.com</p>
                  </div>
                </a>
                
                <div className="card-glass p-4 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://github.com/TuppuduSindhu" target="_blank" rel="noopener noreferrer" className="p-4 card-glass hover:border-primary/50 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sindhu-tuppudu-889725266/" target="_blank" rel="noopener noreferrer" className="p-4 card-glass hover:border-secondary/50 hover:text-secondary transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-8">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell me about your project or opportunity..." value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} required rows={5} className="bg-background/50 border-border/50 focus:border-primary resize-none" />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;