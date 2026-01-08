"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CodeXml, User, Github, Globe } from "lucide-react";
import TextType from "./TextType";

export const WelcomeScreen = ({ onLoadingComplete }: { onLoadingComplete?: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS manually if needed, or rely on global init
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });

    // Always scroll to top on reload/load
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
      setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 1000); // Wait for fade out animation
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] transition-opacity duration-1000 ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className="relative w-full max-w-4xl mx-auto px-4">
        {/* Icons Grid */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {/* Icon 1 */}
          <div data-aos="fade-down" data-aos-delay="0">
            <div className="relative group hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                <CodeXml className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Icon 2 */}
          <div data-aos="fade-down" data-aos-delay="200">
            <div className="relative group hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Icon 3 */}
          <div data-aos="fade-down" data-aos-delay="400">
            <div className="relative group hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold space-y-2 sm:space-y-4">
            <div className="mb-2 sm:mb-4">
              <span data-aos="fade-right" data-aos-delay="200" className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Welcome
              </span>{" "}
              <span data-aos="fade-right" data-aos-delay="400" className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                To
              </span>{" "}
              <span data-aos="fade-right" data-aos-delay="600" className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                My
              </span>
            </div>
            <div>
              <span data-aos="fade-up" data-aos-delay="800" className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>{" "}
              <span data-aos="fade-up" data-aos-delay="1000" className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Website
              </span>
            </div>
          </h1>
        </div>

        {/* Button/Link */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="1200">
          <a
            href="https://www.gayathribattikeri.com"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full relative group hover:scale-105 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                <TextType
                  text={["Gayathri Battikeri"]}
                  typingSpeed={100}
                  cursorCharacter="|"
                  cursorClassName="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  loop={false}
                />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
