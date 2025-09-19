"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Link from 'next/link';
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
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 min-h-screen flex flex-col">
      <main className="flex-grow">
        <Navbar/>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex flex-col md:flex-row items-center gap-12`}>
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Hi, Im <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SAKTHIGANESH</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  A passionate frontend developer creating beautiful, functional web experiences with modern technologies.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View My Work
                  </a>
                  <a href="#contact" className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg">
                    Contact Me
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-md opacity-30 animate-pulse"></div>
                  <Image
                    src="/images/Gemini_Generated_Image_alsfmpalsfmpalsf.jpg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover shadow-2xl border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
<section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">About Me</span>
    </h2>
    
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      {/* Icon/Graphic Header */}
      <div className="flex justify-center mb-10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
          Im a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> with expertise in building modern, responsive web applications using cutting-edge technologies like <span className="font-medium text-purple-600">Next.js</span>, <span className="font-medium text-blue-600">TypeScript</span>, and <span className="font-medium text-purple-600">Tailwind CSS</span>.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-10">
          My journey in web development started with a curiosity about how websites work, and has evolved into a passion for creating efficient, user-friendly interfaces that solve real-world problems. I recently completed an internship where I developed REST APIs and responsive UIs for a food service platform.
        </p>
      
        
       
      </div>
    </div>
  </div>
</section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">My Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'JavaScript', 'HTML', 'CSS'].map((skill, index) => (
                <div 
                  key={skill} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-3 text-blue-600">
                    {skill === 'Next.js' && '⚡'}
                    {skill === 'TypeScript' && '📘'}
                    {skill === 'Tailwind CSS' && '🎨'}
                    {skill === 'React' && '⚛️'}
                    {skill === 'Node.js' && '🟢'}
                    {skill === 'JavaScript' && '📜'}
                    {skill === 'HTML' && '🌐'}
                    {skill === 'CSS' && '🎭'}
                  </div>
                  <h3 className="font-semibold text-gray-800">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Only 1 project as requested */}
<section id="projects" className="py-20 px-4 bg-white">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">My Projects</span>
    </h2>
    
    <div className="grid grid-cols-1 gap-10">
      {/* Single Project */}
      <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
        <div className="mb-6 relative h-48 rounded-xl overflow-hidden">
          <Image
            src="/images/food.jpg"
            alt="Global Cuisine Explorer Project"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium">View Details</span>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Global Cuisine Explorer and Custom Cooking On-Demand</h3>
        <p className="text-gray-600 mb-4">
          Developed a web application to connect users with professional cooks and chefs for personalized meal preparation.
        </p>
        <ul className="text-gray-600 mb-4 list-disc pl-5 space-y-1">
          <li>Integrated Razorpay for secure online payments and transaction handling</li>
          <li>Implemented user authentication and real-time booking system</li>
          <li>Created responsive UI with modern design principles</li>
        </ul>
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Next.js</span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Node.js</span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">MongoDB</span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Razorpay</span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group">
            View Project <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#" className="inline-flex items-center text-gray-600 font-medium hover:text-gray-800 transition-colors group">
            GitHub <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
       
       {/* download resume */}
       <section id="resume" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto max-w-4xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        My Resume
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A comprehensive overview of my skills, experience, and qualifications
      </p>
    </div>
    
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="md:flex">
        {/* Left side with download button */}
        <div className="md:w-2/5 bg-gradient-to-b from-purple-700 to-blue-700 p-8 text-white flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Resume Download</h3>
              <p className="text-blue-100 opacity-90">Get a complete copy of my professional background</p>
            </div>
            
            <div className="space-y-3 mt-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>PDF Format</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Updated Recently</span>
              </div>
            </div>
          </div>
          
          <a 
            href="/SAKTHIGANESH-resume-1.pdf" 
            download="SAKTHIGANESH_Resume.pdf" 
            className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Download resume PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
        
        {/* Right side with highlights */}
        <div className="md:w-3/5 p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Resume Highlights</h3>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Full Stack Development</h4>
                <p className="text-gray-600">Experience with React, Next.js, Node.js, and MongoDB</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Technical Skills</h4>
                <p className="text-gray-600">Modern web technologies and development practices</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Professional Experience</h4>
                <p className="text-gray-600">Internship and project experience in software development</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">For full details, work history, and education, please download the complete resume.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Experience Section */}
<section id="experience" className="py-20 px-4 bg-gray-50">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work Experience</span>
    </h2>
    
    <div className="relative">
      {/* Timeline bar */}
      <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
      
      {/* Experience 1 - Current */}
      <div className="mb-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-800">Intern Full Stack Developer</h3>
          <p className="text-blue-600 font-medium">GegoSoft Technologies</p>
          <p className="text-gray-500">Madurai, Tamilnadu</p>
          <p className="text-gray-500">Jan 2025 – July 2025</p>
        </div>
        <div className="flex justify-center md:justify-center md:w-8 relative">
          <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
        </div>
        <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
          <ul className="text-gray-600 list-disc pl-5 space-y-2">
            <li>Developed REST APIs for user authentication and order management in a real-time food service platform using Node.js and MongoDB</li>
            <li>Built responsive UI components with Next.js and Tailwind CSS, ensuring compatibility across desktop and mobile devices</li>
            <li>Integrated Razorpay for secure payment processing, including test-mode transaction handling and webhook implementation</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MongoDB</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Next.js</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Tailwind CSS</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Razorpay</span>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

     

{/* Contact Section */}
<section id="contact" className="py-20 px-4 bg-white">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Get in Touch</span>
    </h2>
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
      <p className="text-lg text-gray-700 mb-8 text-center">
        Im excited to connect! Reach out via email or social media for collaborations or inquiries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-800 mb-2">Email</p>
          <Link href="mailto:sakthiganesh282003@gmail.com" className="text-blue-500 hover:text-blue-700 transition-colors">
            sakthiganesh282003@gmail.com
          </Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <p className="font-semibold text-gray-800 mb-2">GitHub</p>
          <Link href="https://github.com/sakthiganesh2003" className="text-blue-500 hover:text-blue-700 transition-colors">
            github.com/sakthiganesh2003
          </Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-800 mb-2">LinkedIn</p>
          <Link href="https://www.linkedin.com/in/sakthi-ganesh-403785370" className="text-blue-500 hover:text-blue-700 transition-colors">
            linkedin.com/in/sakthi-ganesh-403785370
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
      
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}