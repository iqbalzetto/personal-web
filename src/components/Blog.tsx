import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "My Journey Learning React: From Zero to Building Apps",
      excerpt: "A deep dive into my React learning journey, the challenges I faced, and the projects that helped me grow as a developer.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "Learning", "JavaScript"],
      featured: true
    },
    {
      title: "Clean Code Principles Every Developer Should Know",
      excerpt: "Exploring the fundamental principles of writing clean, maintainable code that your future self will thank you for.",
      date: "2024-01-10", 
      readTime: "8 min read",
      tags: ["Clean Code", "Best Practices", "Programming"]
    },
    {
      title: "Building My First Full-Stack Application",
      excerpt: "The story behind my first full-stack project, the technologies I used, and the lessons learned along the way.",
      date: "2024-01-05",
      readTime: "6 min read", 
      tags: ["Full-Stack", "Project", "Node.js"]
    },
    {
      title: "Why I Chose TypeScript Over JavaScript",
      excerpt: "My thoughts on why TypeScript has become my go-to choice for building robust applications.",
      date: "2023-12-28",
      readTime: "4 min read",
      tags: ["TypeScript", "JavaScript", "Opinion"]
    }
  ];

  const getTagColor = (tag: string) => {
    const colors = {
      'React': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Learning': 'bg-green-500/20 text-green-400 border-green-500/30',
      'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Clean Code': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Best Practices': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Programming': 'bg-primary/20 text-primary border-primary/30',
      'Full-Stack': 'bg-accent/20 text-accent border-accent/30',
      'Project': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Node.js': 'bg-green-600/20 text-green-500 border-green-600/30',
      'TypeScript': 'bg-blue-600/20 text-blue-500 border-blue-600/30',
      'Opinion': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    };
    return colors[tag as keyof typeof colors] || 'bg-secondary/20 text-secondary-foreground border-secondary/30';
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">{"> "}</span>
              Latest <span className="gradient-text">Posts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing my learning journey, insights, and experiences in the world of programming
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:neon-glow group cursor-pointer ${
                  post.featured ? 'md:col-span-2' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="outline"
                        className={`${getTagColor(tag)} text-xs font-mono`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium group/btn"
                  >
                    Read More 
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Blog CTA */}
          <div className="text-center">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to read more?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I regularly write about programming, learning experiences, and tech insights. 
                Stay tuned for more posts coming soon!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default"
                  className="neon-glow hover:neon-glow-strong transition-all duration-300"
                >
                  Subscribe to Updates
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View All Posts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;