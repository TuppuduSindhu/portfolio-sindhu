import { GraduationCap, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="blob-decoration w-72 h-72 bg-secondary/10 -right-36 top-20" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-heading">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Designing Solutions,{" "}
            <span className="gradient-text">Not Just Visuals</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year <span className="text-foreground font-medium">B.Tech Computer Science (AI)</span> student 
              at <span className="text-primary font-medium">Parul University</span>, graduating in 2026. 
              My passion lies in using technology to solve real-world problems through innovative software solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in frontend development, AI/ML, and data science, 
              I've built projects ranging from music streaming clones to CNN-based medical diagnosis systems. 
              I believe in continuous learning and collaborative problem-solving.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="card-glass p-4 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">B.Tech CSE (AI) - 2026</p>
                </div>
              </div>
              <div className="card-glass p-4 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Focus Areas</h4>
                  <p className="text-sm text-muted-foreground">AI, Web Dev, Data Science</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="card-glass p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Heart className="text-primary" size={24} />
              What Drives Me
            </h3>
            <ul className="space-y-4">
              {[
                "Building user-centric applications that make a difference",
                "Exploring the intersection of AI and practical solutions",
                "Collaborative teamwork and knowledge sharing",
                "Continuous learning and staying updated with tech trends",
                "Writing clean, maintainable, and efficient code",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
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
