
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  imageAlt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  imageAlt
}) => {
  return (
    <div className="group rounded-lg overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 ease-in-out h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-primary/90 text-white rounded-full hover:bg-primary transition-colors duration-300"
              aria-label="View live site"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-secondary/90 text-white rounded-full hover:bg-secondary transition-colors duration-300"
              aria-label="View code on GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-foreground/70 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
