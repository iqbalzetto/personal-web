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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

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
      value: "mohammad.iqbal@example.com",
      href: "mailto:mohammad.iqbal@example.com"
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <Coffee className="mr-3 text-primary" size={24} />
                    Let's have a chat
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Drop me a message and I'll get back to you as soon as possible!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, opportunity, or just say hi!"
                        rows={6}
                        required
                        className="bg-background/50 border-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full neon-glow hover:neon-glow-strong transition-all duration-300 group"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Availability */}
            <div className="space-y-8">
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
      </div>
    </section>
  );
};

export default Contact;