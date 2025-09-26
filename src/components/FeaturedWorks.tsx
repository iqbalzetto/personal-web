import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const FeaturedWorks = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Features include user authentication, shopping cart, order tracking, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Includes kanban boards, time tracking, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion", "Zustand"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "An intelligent chatbot application with natural language processing, context awareness, and multi-language support. Features include conversation history, export functionality, and customizable AI personas.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      techStack: ["React", "OpenAI API", "Firebase", "Python", "FastAPI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
    }
  ];

  return (
    <section id="works" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-4 animate-fade-in">
            <span className="text-primary animate-pulse">&gt;</span> Featured Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Project Info */}
                  <div className={`p-8 space-y-6 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-mono font-semibold text-primary mb-3 uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 transition-colors font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-2">
                      <Button 
                        variant="default"
                        size="sm"
                        className="font-mono"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="font-mono"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;