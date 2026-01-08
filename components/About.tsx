"use client";

import React from "react";
import StatCard from "./StatCard";
import { Award, Code, FileText, Globe, Sparkles } from "lucide-react";


const About = () => {

  const handleScrollToPortfolio = (tabIndex: number) => {
    document.getElementById('Portfolio')?.scrollIntoView({ behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('switchTab', { detail: tabIndex }));
  };

  return (
    <div
      className="py-20 text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]"
      id="About"
    >
      {/* Heading */}
      <div className="text-center mb-16" data-aos="zoom-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          About Me
        </h2>
        <p className="mt-2 text-gray-400 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transforming ideas into digital experiences
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Hello, I'm
            </span>
            <span className="block mt-2 text-gray-200">Gayathri</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-justify">
            Full Stack Web Developer with expertise in React JS, Next JS, Node JS,
            Laravel, and Tailwind CSS. Skilled in building responsive, scalable,
            and user-friendly web applications, developing and integrating
            RESTful APIs, and optimizing performance.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
              <FileText className="w-5 h-5" /> Download CV
            </button>
            <button 
              onClick={() => handleScrollToPortfolio(0)}
              className="px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium hover:bg-[#a855f7]/10 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Code className="w-5 h-5" /> View Projects
            </button>
          </div>
        </div>

        {/* Animated Profile Image */}
        <div
          className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2"
          data-aos="fade-left"
        >
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Animated Glow */}
            <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
              <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

                <img
                  src="/Gayathri.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                />

                {/* Shine Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                  <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <StatCard
          number="21"
          label="Total Projects"
          sub="Innovative web solutions"
          icon={Code}
          delay={0}
          onClick={() => handleScrollToPortfolio(0)}
        />
        <StatCard
          number="20"
          label="Professional Skills"
          sub="Modern tech stack"
          icon={Award}
          delay={200}
          onClick={() => handleScrollToPortfolio(2)}
        />
        <StatCard
          number="2.3"
          label="Years Experience"
          sub="Continuous learning"
          icon={Globe}
          delay={400}
          onClick={() => handleScrollToPortfolio(1)}
        />
      </div>
    </div>
  );
};

export default About;
