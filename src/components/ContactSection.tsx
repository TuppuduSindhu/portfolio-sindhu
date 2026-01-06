import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:thuppudusindhu@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client!",
      description: "Your default email application should open shortly.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="blob-decoration w-96 h-96 bg-primary/15 -left-48 top-20" />
      <div className="blob-decoration w-80 h-80 bg-secondary/15 right-0 bottom-0" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-heading flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            I'm always excited to connect and discuss opportunities in software development, AI, or web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:thuppudusindhu@gmail.com"
                  className="card-glass-bright p-5 flex items-center gap-4 hover:border-primary/50 transition-all group hover:scale-[1.02]"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                    <Mail size={26} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-lg">thuppudusindhu@gmail.com</p>
                  </div>
                </a>
                
                <div className="card-glass-bright p-5 flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-lg">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/TuppuduSindhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 card-glass-bright hover:border-primary/50 hover:text-primary transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sindhu-tuppudu-889725266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 card-glass-bright hover:border-secondary/50 hover:text-secondary transition-all hover:scale-110 hover:shadow-lg hover:shadow-secondary/10"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass-bright p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary h-12"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary h-12"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full shadow-lg shadow-primary/20">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
