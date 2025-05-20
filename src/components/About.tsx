
import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and design systems.",
      technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Backend Development",
      description: "Building robust, scalable APIs and services that power web applications.",
      technologies: ["Node.js", "Express", "Python", "Flask", "RESTful APIs"]
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Database Management",
      description: "Working with both SQL and NoSQL databases to store and manage application data efficiently.",
      technologies: ["MongoDB", "MySQL", "Firebase", "Data Modeling"]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Artificial Intelligence",
      description: "Implementing machine learning algorithms and AI solutions to solve complex problems.",
      technologies: ["TensorFlow", "Python", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Machine Learning",
      description: "Developing and training ML models for predictive analytics and pattern recognition.",
      technologies: ["Scikit-learn", "Pandas", "Data Analysis", "Neural Networks"]
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Full Stack Projects",
      description: "Combining frontend, backend, and AI capabilities to create complete web applications.",
      technologies: ["MERN Stack", "Git", "Deployment", "API Integration"]
    }
  ];

  return (
    <section id="about" className="section-container bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="text-lg mb-6 text-foreground/90">
              I'm a passionate developer specializing in both AI/ML and Full Stack Web Development. My educational background in BCA with specialization in Artificial Intelligence and Machine Learning has given me a strong foundation in creating innovative tech solutions that combine the power of AI with modern web technologies.
            </p>
            <p className="text-lg mb-6 text-foreground/90">
              My approach to development focuses on creating intuitive, user-friendly applications while leveraging data-driven insights to solve real-world problems. I'm particularly interested in building interactive web applications that incorporate machine learning capabilities.
            </p>
            <p className="text-lg text-foreground/90">
              When I'm not coding, you can find me exploring emerging technologies in AI, participating in hackathons, and continually expanding my skill set through hands-on projects and continuous learning.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border/50">
            <h3 className="text-xl font-bold mb-4 text-foreground">Education & Experience</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-foreground">BCA (AI/ML)</h4>
              <p className="text-foreground/70">Jaipur National University | 2020 - 2023</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground">Full Stack Web Developer Course</h4>
              <p className="text-foreground/70">GeekforGeeks</p>
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
