'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectShowcase from '@/components/ProjectShowcase';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <ProcessSection />
        
        {/* Artist Statement Section */}
        <section id="statement" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center">Artist Statement</h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  My final year project explores the connections and gaps between people in the digital age. By combining video and interactive installations, I create an immersive experience that allows viewers to reflect on how modern communication technology both connects and separates us.
                </p>
                <p>
                  The work is inspired by the sense of loneliness in urban life, where I&apos;ve observed people physically close in public spaces yet mentally distant due to digital devices. At the same time, digital tools provide unprecedented connection methods, making long-distance communication possible.
                </p>
                <p>
                  Through this project, I invite viewers to reconsider technology&apos;s role in our lives and how to find balance between the digital and physical worlds. This project combines narrative video, interactive design, and spatial installation to provide an experience that engages both mind and body.
                </p>
                <div className="mt-8 text-center">
                  <a 
                    href="/statement"
                    className="inline-flex items-center text-accent hover:underline"
                  >
                    Read Full Statement
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Exhibition Information Section */}
        <section id="exhibition" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Exhibition Information</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Final Year Project Exhibition Time and Location
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Exhibition Schedule</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <span className="font-medium block">Opening Date:</span>
                        <span className="text-muted-foreground">June 10, 2024 (Friday) 19:00</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-medium block">Exhibition Period:</span>
                        <span className="text-muted-foreground">June 10 - June 20, 2024</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-medium block">Opening Hours:</span>
                        <span className="text-muted-foreground">Daily 10:00 - 18:00</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Venue</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <span className="font-medium block">Address:</span>
                        <span className="text-muted-foreground">Hong Kong Creative Space Art Center, 10 Salisbury Road, Tsim Sha Tsui, Kowloon, Hong Kong</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <span className="font-medium block">Contact Number:</span>
                        <span className="text-muted-foreground">(852) 1234-5678</span>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <a 
                      href="/exhibition"
                      className="inline-flex items-center text-accent hover:underline"
                    >
                      View Exhibition Map & Directions
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
