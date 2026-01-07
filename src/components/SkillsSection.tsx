import { 
  Code2, 
  Globe, 
  Brain, 
  Wrench, 
  Users, 
  Palette 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript"],
    color: "primary",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "React"],
    color: "accent",
  },
  {
    title: "AI & Data",
    icon: Brain,
    skills: ["AI/ML", "Data Science", "DSA"],
    color: "primary",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["VS Code", "Google Colab", "Git"],
    color: "accent",
  },
  {
    title: "Professional Skills",
    icon: Users,
    skills: ["Communication", "Team Leadership", "Problem Solving"],
    color: "primary",
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["UI/UX Basics", "Responsive Design", "Figma"],
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" },
    accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
  };
  return colors[color] || colors.primary;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-muted/30">
      {/* Background Decoration */}
      <div className="blob-decoration w-96 h-96 bg-primary/10 -left-48 top-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-heading">Skills & Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A diverse skill set spanning programming, web development, AI/ML, and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                className="card-glass p-6 hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${colors.bg} ${colors.text}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;