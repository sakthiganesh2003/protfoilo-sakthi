"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        const target = href ? document.querySelector(href) : null;
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#030014] text-gray-200 min-h-screen flex flex-col font-sans selection:bg-indigo-500/30">
      <main className="flex-grow relative overflow-x-hidden">
        <Navbar />
        
        {/* Ambient Dark Mode Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen opacity-50 animate-pulse duration-[10000ms]"></div>
          <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen opacity-50 animate-pulse duration-[8000ms] delay-1000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px] mix-blend-screen opacity-60"></div>
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative z-10 w-full">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex flex-col md:flex-row items-center justify-between gap-16`}>
              <div className="md:w-1/2 text-center md:text-left z-20">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-md">
                  <span className="flex w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                  Available for new opportunities
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                  <span className="block text-white mb-2">Hi, I&apos;m</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-snug">SAKTHIGANESH</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed font-light max-w-2xl">
                  A passionate Full Stack Developer crafting exceptional, high-performance digital experiences.
                </p>
                <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                  <a href="#projects" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95">
                    Explore My Work
                  </a>
                  <a href="#contact" className="px-8 py-4 bg-slate-900/50 text-white font-bold rounded-full border border-slate-700 hover:bg-slate-800 transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95">
                    Contact Me
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center md:justify-end z-20">
                <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow"></div>
                  <div className="absolute inset-2 bg-slate-950 rounded-full z-10"></div>
                  <Image
                    src="/images/Gemini_Generated_Image_alsfmpalsfmpalsf.jpg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover z-20 p-2 group-hover:scale-105 transition-transform duration-500 border-4 border-slate-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">About Me</span>
            </h2>
            
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-slate-800 p-8 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="text-center md:text-left space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-slate-300 font-light">
                  I&apos;m a dedicated <span className="font-semibold text-white">Full Stack Developer</span> specialized in building scalable, modern architectural solutions using <span className="text-indigo-400 font-medium tracking-wide">Next.js</span>, <span className="text-blue-400 font-medium tracking-wide">TypeScript</span>, and <span className="text-teal-400 font-medium tracking-wide">Tailwind CSS</span>.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-slate-400 font-light">
                  My philosophy centers on beautiful UI and robust backend systems. I recently developed RESTful services and payment-integrated platforms as part of my professional journey, always striving for performance optimization and pixel-perfect precision design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Technical Arsenal</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Next.js', icon: '⚡', color: 'from-gray-700 to-gray-900' },
                { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-900' },
                { name: 'Tailwind CSS', icon: '🎨', color: 'from-teal-500 to-blue-600' },
                { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
                { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-700' },
                { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-900' },
                { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-yellow-600' },
                { name: 'CSS/HTML', icon: '🌐', color: 'from-orange-500 to-red-600' }
              ].map((skill) => (
                <div 
                  key={skill.name} 
                  className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-2 text-center group shadow-xl"
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl mb-6 flex items-center justify-center text-3xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-slate-200 text-lg tracking-wide">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section with Web Previews */}
        <section id="projects" className="py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Live Showcases</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">Interact with my live projects. Full websites rendered right inside the cards.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Project 1 */}
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-[2rem] border border-slate-800 p-2 flex flex-col h-full hover:border-slate-700 transition-colors shadow-2xl relative group">
                {/* Browser Mockup Header */}
                <div className="h-12 border-b border-slate-800 flex items-center px-4 bg-slate-950/50 rounded-t-[1.8rem]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto bg-slate-800/50 rounded-full px-4 py-1 text-xs text-slate-400 font-mono flex items-center">
                    <svg className="w-3 h-3 mr-2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    explore-global-food
                  </div>
                </div>
                {/* Iframe Container */}
                <div className="relative h-[450px] w-full bg-slate-950 overflow-hidden isolate">
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-b shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]"></div>
                  {/* The interactive iframe */}
                  <iframe 
                    src="https://explore-global-food-frontend.vercel.app/" 
                    className="w-full h-full border-0 absolute inset-0 z-0 bg-white"
                    title="Global Food Delivery Platform"
                    loading="lazy"
                  />
                  {/* Overlay prompt to open full external */}
                  <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="https://explore-global-food-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="pointer-events-auto bg-slate-900/90 hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
                      Open Full Screen <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-slate-900/40 rounded-b-[1.8rem]">
                  <h3 className="text-2xl font-bold mb-3 text-white">Global Food Delivery Platform</h3>
                  <p className="text-slate-400 mb-6 flex-grow leading-relaxed font-light">
                    A full-stack localized culinary experience platform enabling secure online payments, authentication, and a real-time responsive dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'Tailwind'].map(tag => (
                      <span key={tag} className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs px-3 py-1.5 rounded-lg font-medium tracking-wide">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>



            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-4 relative z-10 w-full">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-full max-w-4xl h-full bg-indigo-900/10 blur-[100px] pointer-events-none rounded-full"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Professional Journey</span>
            </h2>
            
            <div className="relative border-l border-slate-800 ml-4 md:mx-auto md:border-l-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2"></div>
              
              {/* Experience Item */}
              <div className="mb-16 relative flex flex-col md:flex-row items-center w-full">
                <div className="md:w-1/2 w-full pl-8 md:pl-0 md:pr-16 md:text-right relative">
                  <span className="md:hidden absolute -left-2 top-2 w-4 h-4 rounded-full bg-slate-900 border border-indigo-500 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">Intern Full Stack Developer</h3>
                  <p className="text-indigo-400 font-semibold mb-2 tracking-wide">GegoSoft Technologies</p>
                  <p className="text-slate-500 text-sm mb-4 font-mono">Jan 2025 – July 2025 • Madurai, India</p>
                </div>
                
                {/* Center marker */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-950 items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                </div>

                <div className="md:w-1/2 w-full pl-8 md:pl-16 mt-4 md:mt-0">
                  <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/80 transition-colors shadow-2xl">
                    <ul className="text-slate-400 font-light list-none space-y-4">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1 text-lg">✦</span>
                        <span className="leading-relaxed">Developed secure REST APIs for robust user authentication and order management loops in a real-time food service app.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1 text-lg">✦</span>
                        <span className="leading-relaxed">Constructed responsive UI pipelines with Next.js and Tailwind CSS guaranteeing cross-device elegance.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3 mt-1 text-lg">✦</span>
                        <span className="leading-relaxed">Spearheaded Razorpay integration architecture for secure test-mode payload transaction routing.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-4xl text-center">
             <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] border border-indigo-500/30 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">Ready to Review My Full History?</h2>
               <p className="text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto relative z-10">Get a complete download of my professional background, education, and extensive tech stack expertise.</p>
               <a 
                 href="/SAKTHIGANESH-R-resume.pdf" 
                 download="SAKTHIGANESH_Resume.pdf" 
                 className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-slate-900 bg-white hover:bg-indigo-50 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 relative z-10"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                 </svg>
                 Download Full Resume PDF
               </a>
             </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 relative z-10 bg-slate-900/30 border-t border-slate-800">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">Let&apos;s Connect</span>
            </h2>
            <p className="text-xl text-slate-400 font-light mb-16 max-w-2xl mx-auto">
              I&apos;m always eager to collaborate on visionary projects. Drop a line for opportunities, inquiries, or coffee chats.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Email Me', value: 'sakthiganesh282003...', href: 'mailto:sakthiganesh282003@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'GitHub Repos', value: 'github.com/sakthiganesh2003', href: 'https://github.com/sakthiganesh2003', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
                { label: 'LinkedIn Profile', value: 'in/sakthi-ganesh', href: 'https://www.linkedin.com/in/sakthi-ganesh-403785370', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
              ].map((contact) => (
                <a 
                  key={contact.label} 
                  href={contact.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-500 group flex flex-col items-center shadow-xl hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 text-white group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} /></svg>
                  </div>
                  <h3 className="text-white font-bold mb-2 text-lg tracking-wide">{contact.label}</h3>
                  <span className="text-slate-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
      
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #030014;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e1b4b;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #4338ca;
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}