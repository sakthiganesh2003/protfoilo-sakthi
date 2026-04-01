import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20 transition-all duration-300">
      <nav className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          SakthiGanesh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 items-center">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-slate-300 hover:text-white transition-colors font-medium text-sm tracking-wide relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <a href="#resume" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 w-8 h-8 focus:outline-none justify-center items-center rounded-lg hover:bg-slate-800/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-300 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed top-20 left-0 w-full bg-slate-900/95 backdrop-blur-2xl border-b border-slate-800/50 shadow-2xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            {['About', 'Skills', 'Projects', 'Contact', 'Resume'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-slate-300 hover:text-white hover:pl-2 transition-all duration-300 font-medium text-lg w-full flex items-center border-b border-slate-800 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}