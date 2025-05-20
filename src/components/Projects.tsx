
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Sathme Football",
      description: "A platform for football enthusiasts to connect, organize matches, and track statistics. Features team management, match scheduling, and player profiles.",
      image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Football app interface",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://sathmefootball.onrender.com/",
      githubUrl: "https://github.com/DhruvsOLaNkiI/Sathmefootball"
    },
    {
      title: "Restaurant Prototype",
      description: "A modern restaurant website prototype with menu browsing, online ordering, and reservation system. Includes responsive design for optimal viewing on all devices.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Restaurant website mockup",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://aquamarine-melba-a5aa48.netlify.app/",
      githubUrl: "https://github.com/DhruvsOLaNkiI/Resturant-Prototype"
    },
    {
      title: "Tactic Board",
      description: "An interactive sports tactic board application for coaches to create, save, and share game strategies. Features drag-and-drop player positioning and animated play sequences.",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Tactical board application",
      tags: ["JavaScript", "Canvas API", "HTML5", "CSS3"],
      liveUrl: "https://sensational-swan-33fef9.netlify.app/",
      githubUrl: "https://github.com/DhruvsOLaNkiI/Tactic-board"
    },
    {
      title: "Story Generator",
      description: "A creative web application that generates unique stories based on user inputs. Leverages AI to create engaging narratives with customizable characters, settings, and plots.",
      image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Story generator application",
      tags: ["React", "OpenAI API", "CSS", "JavaScript"],
      liveUrl: "https://storygenrator.netlify.app/",
      githubUrl: "https://github.com/DhruvsOLaNkiI/story-generator"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">My Projects</h2>
      <p className="text-foreground/70 max-w-2xl mb-12">
        Here are some of my recent projects. Each one presented unique challenges and opportunities to grow as a developer.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
