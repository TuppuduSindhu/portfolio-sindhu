import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Decorations */}
      <div className="blob-decoration w-96 h-96 bg-primary/20 top-20 -left-48 animate-blob" />
      <div className="blob-decoration w-80 h-80 bg-accent/15 top-40 right-0 animate-blob-delayed" />
      <div className="blob-decoration w-64 h-64 bg-primary/10 bottom-20 left-1/4 animate-blob" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <p className="section-heading">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Hello, I'm{" "}
              <span className="gradient-text">Sindhu Tuppudu</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-xl mb-8 mx-auto lg:mx-0">
              Passionate about building innovative solutions with AI, web development, 
              and problem-solving. Final-year B.Tech student ready to make an impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2026</div>
                <div className="text-sm text-muted-foreground">Graduating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">AI</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Sindhu Tuppudu" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 card-glass px-4 py-2 animate-float">
                <p className="text-sm font-semibold">
                  <span className="text-primary">Open to</span> Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;