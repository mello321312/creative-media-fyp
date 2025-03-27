'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Page Title */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Projects</h1>
              <p className="text-xl text-muted-foreground">
                A complete showcase of final year projects, including video, interactive installations, and creative expressions
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Project Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8">Video Work</h2>
                
                <div className="aspect-video relative mb-6 rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/video-preview.jpg" 
                    alt="Video Work Preview" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-accent/90 hover:bg-accent text-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="prose prose-lg">
                  <h3>"Urban Echoes" - Experimental Video</h3>
                  <p>
                    This 10-minute experimental documentary explores the soundscape and visual connections in the city. Through layered visual narratives and carefully designed sound, the work presents the unique state of isolation yet coexistence of people in urban life.
                  </p>
                  <p>
                    The video employs various filming techniques, including time-lapse photography, macro close-ups, and experimental post-processing, creating a surreal urban experience that allows viewers to reexamine details often overlooked in everyday environments.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-8">Interactive Installation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/interactive-1.jpg" 
                      alt="Interactive Installation View 1" 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/interactive-2.jpg" 
                      alt="Interactive Installation View 2" 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                
                <div className="prose prose-lg">
                  <h3>"Connection Maze" - Interactive Installation</h3>
                  <p>
                    This interactive installation combines projection mapping, motion sensors, and surround sound to create an immersive space that responds to viewer behavior. As audiences move around the installation, the projected content changes dynamically, presenting a visual metaphor for digital connection and interpersonal distance.
                  </p>
                  <p>
                    The installation uses Arduino controllers and multiple ultrasonic sensors to track audience positions, and transforms this data into visual projections through custom software. The work explores the concept of how technology simultaneously connects and isolates people.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 