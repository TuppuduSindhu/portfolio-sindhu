import { Briefcase, Calendar, CheckCircle2, Sparkles } from "lucide-react";

const ExperienceSection = () => {
  const responsibilities = [
    "Worked on software development and data engineering tasks",
    "Built Python & SQL scripts for ETL, data processing, and validation",
    "Gained exposure to SAP HANA systems and ABAP concepts",
    "Followed Agile methodology and collaborated with mentors",
    "Focused on data quality, automation, testing, and optimization",
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="blob-decoration w-96 h-96 bg-accent/15 right-0 top-20" />
      <div className="blob-decoration w-64 h-64 bg-secondary/15 -left-32 bottom-0" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-heading flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="card-glass-bright p-8 md:p-10 relative overflow-hidden">
            {/* Decorative gradient corner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-bl-full" />
            
            {/* Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Icon */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary flex-shrink-0 self-start shadow-lg shadow-primary/10">
                <Briefcase size={36} />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold">Software Development Intern</h3>
                    <p className="text-primary font-semibold text-lg">Data Engineering</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">Nov 2024 – Jun 2025</span>
                  </div>
                </div>
                
                <p className="text-xl text-secondary font-semibold mb-6">
                  Edunet Foundation (Online Internship)
                </p>
                
                <ul className="space-y-4">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 card-glass-bright px-8 py-4 animate-glow-pulse">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
              <span className="font-semibold text-lg">
                Currently open to <span className="text-primary">internships</span> and{" "}
                <span className="text-secondary">entry-level roles</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
