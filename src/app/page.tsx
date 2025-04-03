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
                  In the tender embrace of darkness, silence becomes the language and shadows that breathe the truths. Honors the darkness…it&apos;s a sanctuary of hidden clarity, quiet vulnerability, and unspoken strength. Within obscurity lies intimacy, the soft murmurs of inner worlds emerging gently, illuminated only by the faintest glow of self-awareness.
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
      </main>
      <Footer />
    </div>
  );
}
