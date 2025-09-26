import { Card, CardContent } from '@/components/ui/card';
import { Code, Target, BookOpen, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Enthusiast",
      description: "I believe in writing code that's not just functional, but beautiful and maintainable."
    },
    {
      icon: Target,
      title: "Job-Ready Mindset",
      description: "Constantly improving my skills and building projects to land my dream developer role."
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharer",
      description: "Passionate about blogging and sharing what I learn with the developer community."
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Love tackling complex challenges and turning ideas into working solutions."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">{"> "}</span>
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse into who I am and what drives my passion for programming
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  Hey there! I'm <span className="text-primary font-semibold">Mohammad Iqbal</span>, 
                  but you can call me <span className="text-accent font-semibold cursor">iqbalzetto</span>. 
                  I'm a passionate programmer who lives and breathes code.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in programming started with curiosity and has evolved into a deep love 
                  for creating digital solutions. I'm currently focused on landing an awesome job 
                  where I can contribute to meaningful projects and grow as a developer.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me writing blog posts about my learning journey, 
                  exploring new technologies, or contributing to open-source projects. I believe 
                  in the power of sharing knowledge and building amazing things together.
                </p>
              </div>

              {/* Terminal-style quote */}
              <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm relative">
                <div className="flex items-center mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-muted-foreground">terminal</span>
                </div>
                <p className="text-primary">
                  <span className="text-muted-foreground">$ </span>
                  echo "Code is poetry, and I'm here to write beautiful verses."
                </p>
                <p className="text-foreground mt-2">
                  Code is poetry, and I'm here to write beautiful verses.
                </p>
                <span className="text-primary animate-blink">_</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:neon-glow group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon size={24} />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;