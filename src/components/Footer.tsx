'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">About</h3>
            <p className="text-sm">
              This website showcases the final year projects of creative media students, including creative processes, artist statements, and exhibition information.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-accent transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/statement" className="hover:text-accent transition-colors">
                  Statement
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:your.email@example.com" className="hover:text-accent transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm">
          <p>© {currentYear} Creative Media FYP Showcase. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 