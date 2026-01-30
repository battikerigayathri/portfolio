"use client";

import React from "react";
import TextType from "./TextType";
import { SquareArrowOutUpRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const tech = ["React JS", "Next JS", "Node JS", "Laravel"];

const Home = () => {
  const handleScrollToPortfolio = (tabIndex: number) => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("switchTab", { detail: tabIndex }));
  };

  return (
    <div
      className="flex justify-between items-center pt-30 px-[5%] sm:px-[5%] lg:px-[10%]"
      id="home"
    >
      <div
        className="pb-4 max-w-4xl  space-y-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="inline-block pt-4 animate-float lg:mx-0 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
              <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                Ready to Innovate
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
          {/* Line 1: Software */}
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Software
            </span>
          </span>

          <br />

          {/* Line 2: Engineer */}
          <span className="relative inline-block mt-2">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
            <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Engineer
            </span>
          </span>
        </h1>
        <div className="py-2 text-2xl">
          <TextType
            cursorCharacter="|"
            text={["Fullstack", "Frontend", "Backend"]}
            textColors={["white"]}
            typingSpeed={100}
            cursorClassName="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
          />
        </div>

        <p className="text-gray-400 max-w-5xl text-2xl">
          Building Modern, Full-Stack, and User-Centric Web Applications with
          Cutting-Edge Technologies.
        </p>
        <div
          className="flex flex-wrap gap-3 justify-start aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className=" px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
            React JS
          </div>
          <div className=" px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
            Next JS
          </div>
          <div className=" px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
            Node JS
          </div>
          <div className=" px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
            Laravel
          </div>
        </div>
        <div
          className="flex flex-row gap-3 w-full justify-start aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          <button
            onClick={() => handleScrollToPortfolio(0)}
            className="group relative w-[140px] xs:w-[160px] cursor-pointer"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
            <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
              <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                  Projects
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link w-4 h-4 text-gray-200 group-hover:rotate-45 transform transition-all duration-300 z-10"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </span>
            </div>
          </button>
          <a href="#Contact">
            <button className="group relative w-[140px] xs:w-[160px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
              <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
                <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                  <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                    Contact
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail w-4 h-4 text-gray-200 group-hover:translate-x-1 transform transition-all duration-300 z-10"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
              </div>
            </button>
          </a>
        </div>
        <div
          className="hidden sm:flex gap-4 justify-start aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="1600"
        >
          <a
            href="https://github.com/gayathribattikeri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative p-3">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/gayathri-battikeri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative p-3">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </button>
          </a>
          <a
            href="https://www.instagram.com/gayathribattikeri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative p-3">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div>
        <DotLottieReact
          src="https://lottie.host/ac01e761-ef62-46d2-998f-fb95db74bc6e/Hhr1tZPnSC.lottie"
          loop
          autoplay
          height={800}
          width={800}
          className=""
        />
      </div>
    </div>
  );
};

export default Home;
