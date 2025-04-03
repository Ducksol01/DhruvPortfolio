
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, user authentication, and payment processing. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      imageAlt: "E-Commerce website mockup",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/username/project1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Features include drag-and-drop interface, task assignments, and deadline notifications.",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Task management application",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com/project2",
      githubUrl: "https://github.com/username/project2"
    },
    {
      title: "Restaurant Reservation System",
      description: "A comprehensive restaurant management system that allows customers to book tables and order food online. Includes admin dashboard for restaurant staff.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      imageAlt: "Restaurant reservation system",
      tags: ["React", "Express", "PostgreSQL", "Redux"],
      liveUrl: "https://example.com/project3",
      githubUrl: "https://github.com/username/project3"
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecast application that provides current and 7-day forecasts for any location. Features include interactive maps and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      imageAlt: "Weather forecast application",
      tags: ["JavaScript", "Node.js", "OpenWeather API"],
      liveUrl: "https://example.com/project4",
      githubUrl: "https://github.com/username/project4"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media managers, featuring engagement metrics, audience demographics, and content performance analysis.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Social media dashboard",
      tags: ["React", "D3.js", "Firebase", "Next.js"],
      liveUrl: "https://example.com/project5",
      githubUrl: "https://github.com/username/project5"
    },
    {
      title: "Learning Management System",
      description: "An educational platform for online courses with features like video lectures, quizzes, progress tracking, and discussion forums.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      imageAlt: "Learning management system",
      tags: ["Angular", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com/project6",
      githubUrl: "https://github.com/username/project6"
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
