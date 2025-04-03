
import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive, accessible, and performant user interfaces with modern frameworks and design systems.",
      technologies: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Backend Development",
      description: "Building robust, scalable APIs and services with a focus on security, performance, and maintainability.",
      technologies: ["Node.js", "Express", "Python/Django", "ASP.NET Core"]
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Database Design",
      description: "Designing efficient database schemas and writing optimized queries for both relational and NoSQL databases.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"]
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Responsive Design",
      description: "Creating user interfaces that work seamlessly across all devices and screen sizes.",
      technologies: ["Mobile-first design", "Media queries", "Progressive enhancement"]
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "DevOps & CI/CD",
      description: "Setting up automated testing, deployment pipelines, and infrastructure management.",
      technologies: ["Docker", "GitHub Actions", "AWS", "Vercel", "Netlify"]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Performance Optimization",
      description: "Improving load times, rendering performance, and overall user experience.",
      technologies: ["Lazy loading", "Code splitting", "Bundle analysis", "Caching strategies"]
    }
  ];

  return (
    <section id="about" className="section-container bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6 text-foreground/90">
              I'm a passionate full stack developer with over 5 years of experience building web applications for clients ranging from startups to large enterprises. 
              My journey in development started with a curiosity about how websites work, which quickly turned into a career-long passion.
            </p>
            <p className="text-lg mb-6 text-foreground/90">
              My approach to development focuses on writing clean, maintainable code that solves real problems. I believe in choosing the right tool for the job and staying adaptable in an ever-changing technology landscape.
            </p>
            <p className="text-lg text-foreground/90">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community through blog posts and mentoring.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border/50">
            <h3 className="text-xl font-bold mb-4 text-foreground">Education & Experience</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-foreground">Senior Full Stack Developer</h4>
              <p className="text-foreground/70">Tech Innovations Inc. | 2020 - Present</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-foreground">Web Developer</h4>
              <p className="text-foreground/70">Digital Solutions Agency | 2017 - 2020</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground">B.S. Computer Science</h4>
              <p className="text-foreground/70">University of Technology | 2013 - 2017</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-8 text-foreground">My Skills & Expertise</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-colors duration-300">
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-foreground">{skill.title}</h4>
              <p className="text-foreground/70 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
