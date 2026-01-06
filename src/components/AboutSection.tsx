import { GraduationCap, Target, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="blob-decoration w-96 h-96 bg-secondary/20 -right-48 top-20" />
      <div className="blob-decoration w-64 h-64 bg-primary/15 left-0 bottom-0" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-heading flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Designing Solutions,{" "}
            <span className="gradient-text">Not Just Visuals</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year <span className="text-foreground font-semibold">B.Tech Computer Science (AI)</span> student 
              at <span className="text-primary font-semibold">Parul University</span>, graduating in 2026. 
              My passion lies in using technology to solve real-world problems through innovative software solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in frontend development, AI/ML, and data science, 
              I've built projects ranging from music streaming clones to CNN-based medical diagnosis systems. 
              I believe in continuous learning and collaborative problem-solving.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="card-glass-bright p-5 flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Education</h4>
                  <p className="text-muted-foreground">B.Tech CSE (AI) - 2026</p>
                </div>
              </div>
              <div className="card-glass-bright p-5 flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 text-secondary group-hover:shadow-lg group-hover:shadow-secondary/20 transition-shadow">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Focus Areas</h4>
                  <p className="text-muted-foreground">AI, Web Dev, Data Science</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="card-glass-bright p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="text-primary" size={24} />
              </div>
              What Drives Me
            </h3>
            <ul className="space-y-5">
              {[
                "Building user-centric applications that make a difference",
                "Exploring the intersection of AI and practical solutions",
                "Collaborative teamwork and knowledge sharing",
                "Continuous learning and staying updated with tech trends",
                "Writing clean, maintainable, and efficient code",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
