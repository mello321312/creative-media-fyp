'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectShowcase = () => {
  return (
    <section id="project" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creative media projects showcasing diverse forms of artistic creation, including video, interactive, games, photography, and sound art.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-card rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <h3 className="text-xl font-bold">Video Work</h3>
                <p className="text-sm text-white/80">Documentary/Animation/Experimental</p>
              </div>
              <Image 
                src="/placeholder-video.jpg" 
                alt="Video Creation" 
                fill 
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="mb-4">
                This is my graduation project—an experimental video about urban loneliness and connection. Through a unique visual language, it explores the psychological state and social relationships of modern people.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-accent hover:underline"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-card rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20 text-white">
                <h3 className="text-xl font-bold">Interactive Installation</h3>
                <p className="text-sm text-white/80">Immersive Experience/Interactive Art</p>
              </div>
              <Image 
                src="/placeholder-interactive.jpg" 
                alt="Interactive Installation" 
                fill 
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="mb-4">
                This is an interactive installation combining sensors and projection, where audience movements affect the projected content, creating an immersive experiential space that explores the relationship between humans and technology.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-accent hover:underline"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a 
            href="/project"
            className="border border-border hover:bg-muted px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 