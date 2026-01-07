import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const responsibilities = [
    "Worked on software development and data engineering tasks",
    "Built Python & SQL scripts for ETL, data processing, and validation",
    "Gained exposure to SAP HANA systems and ABAP concepts",
    "Followed Agile methodology and collaborated with mentors",
    "Focused on data quality, automation, testing, and optimization",
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="blob-decoration w-80 h-80 bg-primary/10 right-0 top-20" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="section-heading">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Experience Card */}
          <div className="card-glass p-8 relative">
            {/* Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="p-4 rounded-2xl bg-primary/10 text-primary flex-shrink-0 self-start">
                <Briefcase size={32} />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Software Development Intern</h3>
                    <p className="text-primary font-medium">Data Engineering</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">Nov 2024 – Jun 2025</span>
                  </div>
                </div>
                
                <p className="text-lg text-accent font-medium mb-4">
                  Edunet Foundation (Online Internship)
                </p>
                
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 card-glass px-6 py-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-medium text-foreground">
                Currently open to <span className="text-primary">internships</span> and{" "}
                <span className="text-accent">entry-level roles</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;