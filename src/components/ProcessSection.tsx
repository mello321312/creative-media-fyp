'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ProcessSection = () => {
  const processes = [
    {
      id: 1,
      title: 'Concept Development',
      description: 'Through brainstorming, research, and exploration, I identify meaningful themes and creative directions. I collect reference materials, analyze related works, and establish the core concept of the project.',
      image: '/placeholder-concept.jpg',
    },
    {
      id: 2,
      title: 'Sketches & Planning',
      description: 'Visualizing ideas through sketches and flowcharts, planning the structure and details of the work. Designing user experience flows and determining interaction methods.',
      image: '/placeholder-sketch.jpg',
    },
    {
      id: 3,
      title: 'Prototype Creation',
      description: 'Building initial prototypes to test technical feasibility and audience interaction. Solving technical issues, optimizing experience design, and adjusting the direction of the work.',
      image: '/placeholder-prototype.jpg',
    },
    {
      id: 4,
      title: 'Refinement & Production',
      description: 'Based on prototype testing results, I refine content and technical implementation. Completing final visual design, programming, video editing, or interactive installation construction.',
      image: '/placeholder-production.jpg',
    },
  ];

  return (
    <section id="process" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Creative Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to final presentation, documenting each key step and thought process in the creative journey.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {processes.map((process, index) => (
            <motion.div 
              key={process.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={process.image} 
                    alt={process.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="bg-card p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">
                    <span className="text-accent">{process.id}.</span> {process.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a 
            href="/process"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            View Detailed Process
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 