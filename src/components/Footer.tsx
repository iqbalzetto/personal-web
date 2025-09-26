import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold gradient-text cursor">
                iqbalzetto
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate programmer crafting clean code and sharing knowledge through blogging. 
                Always learning, always growing.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/iqbalzetto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:animate-pulse"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/iqbalzetto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:animate-pulse"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:mohammad.iqbal@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:animate-pulse"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {['Home', 'About', 'Skills', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left w-fit"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Latest Update */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Latest Update</h4>
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground font-mono mb-2">
                  <span className="text-primary">$ </span>git log --oneline -1
                </p>
                <p className="text-sm text-foreground">
                  🚀 Portfolio v2.0 - Added cyberpunk theme
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart size={16} className="mx-2 text-red-500 animate-pulse" fill="currentColor" />
                <span>and</span>
                <Code size={16} className="mx-2 text-primary" />
                <span>by Mohammad Iqbal</span>
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                © {currentYear} iqbalzetto.dev - All rights reserved
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground font-mono">
                <span className="text-primary">$ </span>
                echo "Thanks for visiting! Let's build something amazing together."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;