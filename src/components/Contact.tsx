import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Coffee } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iqbalzetto@gmail.com",
      href: "mailto:iqbalzetto@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/iqbalzetto",
      href: "https://github.com/iqbalzetto"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "linkedin.com/in/iqbalzetto",
      href: "https://linkedin.com/in/iqbalzetto"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Open to Remote/Hybrid",
      href: null
    }
  ];

  const availability = [
    "Full-time positions",
    "Freelance projects", 
    "Open source collaboration",
    "Technical discussions",
    "Mentorship opportunities"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">{"> "}</span>
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's connect! I'm always excited to discuss new opportunities, collaborate on projects, or just chat about tech.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <item.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Currently Available For</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {availability.map((item, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/30 text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground font-mono">
                      <span className="text-primary">$ </span>
                      status --current
                    </p>
                    <p className="text-sm text-green-400 mt-1 font-mono">
                      ✓ Available for new opportunities
                    </p>
                    <p className="text-sm text-green-400 font-mono">
                      ✓ Ready to start immediately
                    </p>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;