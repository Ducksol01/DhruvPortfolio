
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ProfileAvatar from './ProfileAvatar';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <ProfileAvatar 
              imagePath="/lovable-uploads/061d022b-8e8f-43f3-818d-46108263df25.png"
              altText="Profile"
              fallbackText="DEV"
              className="ring-4 ring-offset-4 ring-offset-background ring-primary/70"
            />
          </div>
          
          <div className="animate-fade-in opacity-0">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
              Full Stack Web Developer
            </span>
          </div>
          
          <h1 className="animate-fade-in opacity-0 delay-100 text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Hi, I'm <span className="text-primary">Dhruv Solanki</span>
          </h1>
          
          <p className="animate-fade-in opacity-0 delay-200 text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            I create responsive web applications with modern technologies, 
            focusing on intuitive user experiences and scalable architecture.
          </p>
          
          <div className="animate-fade-in opacity-0 delay-300 flex flex-wrap justify-center gap-4 mb-16">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="animate-fade-in opacity-0 delay-400 flex justify-center space-x-6">
            <a href="https://github.com/DhruvsOLaNkiI" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/dhruv-solanki" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:dhruv.solanki@example.com" className="text-foreground/60 hover:text-primary transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-primary transition-colors duration-300 animate-bounce"
        aria-label="Scroll to Projects"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
