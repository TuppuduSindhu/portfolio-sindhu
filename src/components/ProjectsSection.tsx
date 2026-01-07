import { ExternalLink, Github } from "lucide-react";
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
    color: "accent",
  },
  {
    title: "Face Expression Detector",
    subtitle: "Real-time Analysis",
    description: "Detects and analyzes facial expressions in real time using computer vision technologies.",
    tech: ["HTML", "CSS", "JavaScript", "OpenCV"],
    liveUrl: "https://tuppudusindhu.github.io/Face_Expression_detector/",
    color: "primary",
  },
  {
    title: "Academic Results Analysis",
    subtitle: "Data Analytics Project",
    description: "Analyzes student performance and influencing factors using Python data analysis libraries.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/TuppuduSindhu/Academic-Results-Analysis-Using-Python",
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { gradient: string; border: string }> = {
    primary: { 
      gradient: "from-primary/10 to-transparent", 
      border: "border-primary/20 hover:border-primary/50" 
    },
    accent: { 
      gradient: "from-accent/10 to-transparent", 
      border: "border-accent/20 hover:border-accent/50" 
    },
  };
  return colors[color] || colors.primary;
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-muted/30">
      {/* Background Decoration */}
      <div className="blob-decoration w-96 h-96 bg-accent/10 -right-48 bottom-20" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-heading">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work spanning web development, AI/ML, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div
                key={index}
                className={`card-glass p-6 border-2 ${colors.border} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`} />
                
                <div className="relative">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-primary text-sm font-medium">{project.subtitle}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild>
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