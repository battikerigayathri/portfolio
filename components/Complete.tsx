"use client";
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Menu, Sparkles, ExternalLink, Mail, Github, Linkedin, 
  Instagram, FileText, Code, Award, Globe, GraduationCap 
} from 'lucide-react';

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

interface StatItem {
  count: string;
  label: string;
  desc: string;
  icon: React.ElementType;
}

// --- Components ---

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { label: 'Home', href: '#Home' },
    { label: 'About', href: '#About' },
    { label: 'Portfolio', href: '#Portfolio' },
    { label: 'Contact', href: '#Contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#030014]/50 backdrop-blur-xl' : 'bg-transparent'} pb-1 sm:pb-6`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#Home" className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
              {/* Replace src with your actual logo path */}
              <img className="h-12 w-12 sm:h-16 sm:w-16 mt-1 sm:mt-6" src="/Mlogo1.svg" alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8 mt-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="group relative px-1 py-2 text-sm font-medium text-[#e2d3fd] hover:text-white transition-colors duration-300">
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#e2d3fd] hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#030014] z-40 flex flex-col pt-20 px-4 space-y-4">
           {navLinks.map((link) => (
             <a 
               key={link.label} 
               href={link.href} 
               onClick={() => setIsOpen(false)}
               className="text-lg font-medium text-[#e2d3fd] hover:text-white block"
             >
               {link.label}
             </a>
           ))}
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" id="Home">
        {/* Background Gradients */}
        <div className="absolute inset-0">
            <div className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12">
            
            {/* Left Text */}
            <div className="w-full lg:w-1/2 space-y-6 text-left order-1 lg:order-1 pt-32 lg:pt-0" data-aos="fade-right">
                <div className="inline-block animate-float" data-aos="zoom-in">
                    <div className="relative group px-3 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                         <Sparkles className="w-4 h-4 text-blue-400" />
                         <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text text-sm font-medium">Ready to Innovate</span>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">Software</span> <br />
                    <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Engineer</span>
                </h1>

                <p className="text-base md:text-lg text-gray-400 max-w-xl font-light">
                    Building Modern, Full-Stack, and User-Centric Web Applications with Cutting-Edge Technologies.
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-3">
                    {['React JS', 'Next JS', 'Node JS', 'Laravel'].map(tech => (
                        <div key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                            {tech}
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                    <a href="#Portfolio" className="group relative w-[160px]">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                        <button className="relative w-full h-11 bg-[#030014] rounded-lg border border-white/10 flex items-center justify-center gap-2 text-gray-200 group-hover:text-white">
                             Projects <ExternalLink className="w-4 h-4" />
                        </button>
                    </a>
                    <a href="#Contact" className="group relative w-[160px]">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
                        <button className="relative w-full h-11 bg-[#030014] rounded-lg border border-white/10 flex items-center justify-center gap-2 text-gray-200 group-hover:text-white">
                             Contact <Mail className="w-4 h-4" />
                        </button>
                    </a>
                </div>

                {/* Socials */}
                <div className="flex gap-4 pt-4">
                    <SocialButton href="https://github.com" icon={Github} />
                    <SocialButton href="https://linkedin.com" icon={Linkedin} />
                    <SocialButton href="https://instagram.com" icon={Instagram} />
                </div>
            </div>

            {/* Right 3D/Image Placeholder */}
            <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center order-2" data-aos="fade-left">
                <div className="relative w-full h-full opacity-90">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl"></div>
                    {/* Placeholder for Canvas/3D Model */}
                    <div className="w-full h-full flex items-center justify-center border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm">
                        <span className="text-gray-500">3D Canvas Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const SocialButton = ({ href, icon: Icon }: { href: string; icon: any }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative p-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 border border-white/10 flex items-center justify-center group-hover:border-white/20">
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
        </div>
    </a>
);

const AboutSection = () => {
    return (
        <div className="py-20 text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="About">
            <div className="text-center mb-16" data-aos="zoom-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">About Me</h2>
                <p className="mt-2 text-gray-400 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" /> Transforming ideas into digital experiences <Sparkles className="w-5 h-5 text-purple-400" />
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-6" data-aos="fade-right">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Hello, I'm</span>
                        <span className="block mt-2 text-gray-200">Masab Qurban</span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-justify">
                        Full Stack Web Developer with expertise in React JS, Next JS, Node JS, Laravel, and Tailwind CSS. Skilled in building responsive, scalable, and user-friendly web applications, developing and integrating RESTful APIs, and optimizing performance.
                    </p>
                    
                    <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium hover:scale-105 transition-transform flex items-center gap-2">
                            <FileText className="w-5 h-5" /> Download CV
                        </button>
                        <button className="px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium hover:bg-[#a855f7]/10 transition-all flex items-center gap-2">
                             <Code className="w-5 h-5" /> View Projects
                        </button>
                    </div>
                </div>

                {/* Image/Stats */}
                <div className="relative" data-aos="fade-left">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden mx-auto border-4 border-white/20">
                         {/* Replace with real image */}
                        <img src="/Masab Qurban.png" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <StatCard number="21" label="Total Projects" sub="Innovative web solutions" icon={Code} delay={0} />
                <StatCard number="20" label="Professional Skills" sub="Modern tech stack" icon={Award} delay={200} />
                <StatCard number="2.3" label="Years Experience" sub="Continuous learning" icon={Globe} delay={400} />
            </div>
        </div>
    );
};

const StatCard = ({ number, label, sub, icon: Icon, delay }: {number: string, label: string, sub: string, icon: any, delay: number}) => (
    <div data-aos="fade-up" data-aos-delay={delay} className="relative group bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden hover:scale-105 transition-all duration-300">
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#6366f1] to-[#a855f7] opacity-10 group-hover:opacity-20 transition-opacity"></div>
        <div className="flex items-center justify-between mb-4">
             <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 text-white">
                 <Icon className="w-8 h-8" />
             </div>
             <span className="text-4xl font-bold text-white">{number}</span>
        </div>
        <div>
            <p className="text-sm uppercase tracking-wider text-gray-300 mb-1">{label}</p>
            <p className="text-xs text-gray-400">{sub}</p>
        </div>
    </div>
);

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState<'projects' | 'qualifications'>('projects');

    return (
        <div className="md:px-[10%] px-[5%] w-full py-20 bg-[#030014]" id="Portfolio">
            <div className="text-center pb-10" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Portfolio Showcase</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4">
                    Explore my journey through projects, qualifications, and technical expertise.
                </p>
            </div>

            {/* Custom Tabs */}
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white/5 p-1 rounded-xl flex gap-2 border border-white/10">
                    <button 
                        onClick={() => setActiveTab('projects')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'projects' ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        <Code className="w-4 h-4" /> Projects
                    </button>
                    <button 
                        onClick={() => setActiveTab('qualifications')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${activeTab === 'qualifications' ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        <GraduationCap className="w-4 h-4" /> Qualifications
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {activeTab === 'projects' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                        {/* Example Project Card */}
                        {[1, 2, 3].map((item) => (
                             <div key={item} className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:border-[#a855f7]/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">Project {item}</h3>
                                <p className="text-gray-400 mb-4">Description of the project goes here. Built with React and Tailwind.</p>
                                <div className="flex gap-2">
                                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React</span>
                                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Node</span>
                                </div>
                             </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
                        {/* Example Qualification Item */}
                        <div className="flex gap-4 items-start bg-gray-900/50 p-6 rounded-xl border border-white/10">
                            <div className="bg-[#a855f7]/20 p-3 rounded-lg">
                                <GraduationCap className="w-6 h-6 text-[#a855f7]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Bachelor of Computer Science</h3>
                                <p className="text-[#a855f7]">University Name • 2020 - 2024</p>
                                <p className="text-gray-400 mt-2">Specialized in Software Engineering with a focus on web technologies.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Main Component ---

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-[#030014] min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      
      {/* Global CSS for custom animations used in your original code */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default Portfolio;