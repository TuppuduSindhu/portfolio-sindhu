import { 
  Code2, 
  Globe, 
  Brain, 
  Wrench, 
  Users, 
  Palette,
  Sparkles
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
    color: "secondary",
  },
  {
    title: "AI & Data",
    icon: Brain,
    skills: ["AI/ML", "Data Science", "DSA"],
    color: "accent",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["VS Code", "Google Colab", "Git"],
    color: "primary",
  },
  {
    title: "Professional Skills",
    icon: Users,
    skills: ["Communication", "Team Leadership", "Problem Solving"],
    color: "secondary",
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["UI/UX Basics", "Responsive Design", "Figma"],
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    primary: { 
      bg: "bg-primary/15", 
      text: "text-primary", 
      border: "border-primary/40",
      glow: "group-hover:shadow-primary/20"
    },
    secondary: { 
      bg: "bg-secondary/15", 
      text: "text-secondary", 
      border: "border-secondary/40",
      glow: "group-hover:shadow-secondary/20"
    },
    accent: { 
      bg: "bg-accent/15", 
      text: "text-accent", 
      border: "border-accent/40",
      glow: "group-hover:shadow-accent/20"
    },
  };
  return colors[color] || colors.primary;
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="blob-decoration w-96 h-96 bg-primary/15 -left-48 top-1/2" />
      <div className="blob-decoration w-72 h-72 bg-accent/15 right-0 bottom-0" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-heading flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Skills & Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
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
                className="card-glass-bright p-6 hover:scale-105 transition-all duration-300 group hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${colors.bg} ${colors.text} ${colors.glow} transition-shadow group-hover:shadow-lg`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${colors.bg} ${colors.text} ${colors.border} hover:scale-105 transition-transform cursor-default`}
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
