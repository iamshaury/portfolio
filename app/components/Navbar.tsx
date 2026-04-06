import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <>
      <Link href="/" className="fixed top-6 left-6 md:top-8 md:left-10 z-50 group slide-enter-content">
        <Logo />
      </Link>

      <nav className="fixed top-6 right-6 md:top-8 md:right-10 flex items-center gap-4 md:gap-6 text-foreground/80 z-50 slide-enter-content">
        <Link href="/projects" className="prose-nav-link hover:text-foreground">

          Projects
        </Link>
        <Link href="/background" className="prose-nav-link hover:text-foreground">
          Background
        </Link>
        <Link href="/blog" className="prose-nav-link hover:text-foreground">
          Blog
        </Link>

        <div className="flex items-center gap-4 ml-2 md:gap-5 md:ml-2">
          <a href="https://github.com/iamshaury" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/shaury-chaudhary-7139a530a/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </>
  );
}
