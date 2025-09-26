import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "Supabase", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust", "PHP"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "Vercel", "VS Code", "Linux", "Webpack", "Vite"]
    }
  ];

  const getSkillColor = (skill: string) => {
    const colors = [
      "bg-primary/20 text-primary border-primary/30",
      "bg-accent/20 text-accent border-accent/30", 
      "bg-green-500/20 text-green-400 border-green-500/30",
      "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "bg-orange-500/20 text-orange-400 border-orange-500/30"
    ];
    return colors[skill.length % colors.length];
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">{"> "}</span>
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:neon-glow group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-foreground">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon size={24} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className={`${getSkillColor(skill)} hover:scale-105 transition-transform duration-200 cursor-default font-mono text-xs`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              <span className="text-accent"># </span>Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Machine Learning", "DevOps", "Microservices", "Web3", "Mobile Development"].map((item, index) => (
                <Badge 
                  key={index}
                  className="bg-secondary/50 text-secondary-foreground border-secondary hover:bg-secondary transition-colors duration-200 font-mono animate-pulse-glow"
                >
                  {item}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground mt-4 font-mono text-sm">
              <span className="text-primary">$ </span>
              always --learning --improving --growing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;