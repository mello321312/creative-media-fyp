'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background animation elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-tertiary/20 blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Creative Media Final Year Project
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A fusion of cross-media art, interactive design, and creative expression
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#project" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#process" 
              className="bg-muted hover:bg-muted/90 text-foreground px-8 py-3 rounded-md font-medium transition-colors"
            >
              Creative Process
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 