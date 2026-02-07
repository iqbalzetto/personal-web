import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden scan-lines">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-primary text-lg font-medium">
              {"> "}Hello, World! I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Mohammad</span>{" "}
            <span className="gradient-text text-glow glitch">Iqbalzetto</span>
          </h1>

          {/* Nickname */}
          <div className="mb-8">
            <span className="text-2xl md:text-3xl text-primary font-medium cursor">
              aka iqbalzetto
            </span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate <span className="text-primary font-semibold">programmer</span> on a mission to land an awesome job
            and share knowledge through <span className="text-accent font-semibold">blogging</span>.
            I love crafting clean code and building amazing digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="default"
              size="lg"
              className="neon-glow hover:neon-glow-strong transition-all duration-300 group"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get In Touch
            </Button>


          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/iqbalzetto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:animate-pulse"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/iqbalzetto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:animate-pulse"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:iqbalzetto@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:animate-pulse"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl float" style={{ animationDelay: '-1s' }}></div>
    </section>
  );
};

export default Hero;