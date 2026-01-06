import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Music Mantra",
    subtitle: "Spotify UI Clone",
    description: "Frontend-only music player replicating Spotify UI with hover effects, responsive layout, and JavaScript-controlled audio playback.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://sindhu-music.vercel.app/",
    color: "primary",
  },
  {
    title: "Brain Tumor Diagnosis",
    subtitle: "Using CNN",
    description: "AI-based MRI tumor detection & classification using CNN, ResNet50, EfficientNet, and YOLOv8. Features Grad-CAM visualization and report generation.",
    tech: ["Python", "Streamlit", "CNN", "YOLOv8"],
    githubUrl: "https://github.com/TuppuduSindhu/BRAIN_TUMOR_DIAGNOSIS_BY_TUMOR_TRACKER_TEAM",
    color: "secondary",
  },
  {
    title: "Face Expression Detector",
    subtitle: "Real-time Analysis",
    description: "Detects and analyzes facial expressions in real time using computer vision technologies.",
    tech: ["HTML", "CSS", "JavaScript", "OpenCV"],
    liveUrl: "https://tuppudusindhu.github.io/Face_Expression_detector/",
    color: "accent",
  },
  {
    title: "Academic Results Analysis",
    subtitle: "Data Analytics Project",
    description: "Analyzes student performance and influencing factors using Python data analysis libraries.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/TuppuduSindhu/Academic-Results-Analysis-Using-Python",
    color: "primary",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { gradient: string; border: string; glow: string }> = {
    primary: { 
      gradient: "from-primary/25 via-primary/10 to-transparent", 
      border: "border-primary/40 hover:border-primary/70",
      glow: "hover:shadow-primary/20"
    },
    secondary: { 
      gradient: "from-secondary/25 via-secondary/10 to-transparent", 
      border: "border-secondary/40 hover:border-secondary/70",
      glow: "hover:shadow-secondary/20"
    },
    accent: { 
      gradient: "from-accent/25 via-accent/10 to-transparent", 
      border: "border-accent/40 hover:border-accent/70",
      glow: "hover:shadow-accent/20"
    },
  };
  return colors[color] || colors.primary;
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="blob-decoration w-96 h-96 bg-secondary/15 -right-48 bottom-20" />
      <div className="blob-decoration w-72 h-72 bg-primary/15 left-0 top-20" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-heading flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A showcase of my work spanning web development, AI/ML, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className={`card-glass-bright p-7 border-2 ${colors.border} transition-all duration-300 hover:scale-[1.03] group hover:shadow-2xl ${colors.glow} relative overflow-hidden`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
                
                <div className="relative">
                  {/* Header */}
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-primary text-sm font-semibold mt-1">{project.subtitle}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-lg bg-muted/80 text-sm font-medium text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild className="shadow-lg">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
