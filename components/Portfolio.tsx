"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Code,
  GraduationCap,
  Boxes,
  BriefcaseBusiness,
  Award,
  ExternalLink,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import StackIcon from "tech-stack-icons";
import { AppBar, Tabs, Tab } from "@mui/material";

// --- Interfaces ---
interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  liveLink?: string;
  detailsLink: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  desc?: string;
}

interface Certificate {
  name: string;
  issuer: string;
  year: string;
}

// types.ts
interface Tech {
  name: string;
  stackIconName: string;
}

// techStack
const techStack: Tech[] = [
  { name: "HTML", stackIconName: "html5" },
  { name: "CSS", stackIconName: "css3" },
  { name: "Tailwind CSS", stackIconName: "tailwindcss" },
  { name: "TypeScript", stackIconName: "typescript" },
  { name: "React JS", stackIconName: "react" },
  { name: "Next JS", stackIconName: "nextjs" },
  { name: "Node JS", stackIconName: "nodejs" },
  { name: "Laravel", stackIconName: "laravel" },
  { name: "Vite", stackIconName: "vitejs" },
  { name: "MySQL", stackIconName: "mysql" },
  { name: "Firebase", stackIconName: "firebase" },
  { name: "MongoDB", stackIconName: "mongodb" },
  { name: "Postman", stackIconName: "postman" },
  { name: "GitHub", stackIconName: "github" },
  { name: "Vercel", stackIconName: "vercel" },
  { name: "Material UI", stackIconName: "materialui" },
  { name: "Motion", stackIconName: "framer" },
  { name: "Figma", stackIconName: "figma" },
  { name: "Linux", stackIconName: "linux" },
  { name: "Ubuntu", stackIconName: "ubuntu" },
];

// --- Data ---
const projects: Project[] = [
  {
    id: 1,
    title: "Tool Matrix (FYP)",
    desc: "A web-based platform developed in React JS, Node JS, Python and Tailwind CSS featuring calculators for various domains. Integrated a Python-powered AI model utilizing Gemini API to solve handwritten math problems. Achieved 95% accuracy in solving math queries through the AI-powered handwriting recognition feature.",
    img: "/tool matrix dark.png",
    liveLink: "https://tool-matrix.vercel.app/",
    detailsLink: "/project/tool-matrix",
  },
  {
    id: 2,
    title: "Snow Dream Studios",
    desc: "Snow Dream Studios is a Swiss-based digital studio blending cutting-edge tech with stunning design. Built with Next.js, Tailwind CSS, Framer Motion, and JavaScript, and hosted on Vercel, it delivers a visually rich, interactive experience. The platform features smooth animations, a modern design, and a comprehensive portfolio.",
    img: "/snowdreamstudios.ch_en_.png",
    liveLink: "https://snowdreamstudios.com/",
    detailsLink: "/project/snowdreamstudios",
  },
  {
    id: 3,
    title: "Partora",
    desc: "Partora is a premier UAE-based AI-powered automotive marketplace expertly built with a Next.js frontend and Node.js backend. It revolutionizes traditional part sourcing by enabling users to effortlessly find specific items via advanced image recognition technology. Supporting extensive new, used, and scrapyard inventories.",
    img: "/partora-store.png",
    liveLink: "https://store.partora.com/",
    detailsLink: "/project/partora-store",
  },
  {
    id: 4,
    title: "Estorefoam",
    desc: "Estorefoam, the UK’s largest online foam supplier since 2000, has a revamped e-commerce platform built with PHP Laravel and Tailwind CSS. The website offers custom foam visualization, allowing users to input measurements and see a visual representation of their foam. With over 25 years of expertise, it provides high-quality foam materials.",
    img: "/estorefoam.png",
    liveLink: "https://estorefoam.co.uk/",
    detailsLink: "/project/estorefoam",
  },
  {
    id: 5,
    title: "The Fresh Drop",
    desc: "A full-stack e-commerce solution built with Next.js and JavaScript, specifically designed for a UAE-based sanitary products business. This platform delivers a high-performance, server-rendered shopping experience for customers and includes a powerful, integrated admin panel for comprehensive store management.",
    img: "/fresh-drop.vercel.app_.png",
    liveLink: "https://thefreshdrop.ae/",
    detailsLink: "/project/the-fresh-drop",
  },
  {
    id: 6,
    title: "Red Dragon",
    desc: "Red Dragon is a luxury B2B e-commerce platform designed for high-net-worth individuals and corporations importing bulk goods from China to Pakistan. Built with a Next.js frontend and Node.js backend, it offers a premium user experience for sourcing exclusive inventory. The ecosystem includes a comprehensive React.js administrative suite.",
    img: "/red-dragon.png",
    detailsLink: "/project/red-dragon",
  },
];

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "VendAxis FZ-LLC, Dubai, UAE",
    period: "02-2025 - Present",
  },
  {
    role: "Front-End Developer (Intern)",
    company: "Snow Dream Studios, Faisalabad, Pakistan",
    period: "11-2024 - 01-2025",
  },
  {
    role: "Web Developer",
    company: "D-Explore-X, Faisalabad, Pakistan",
    period: "09-2023 - 10-2024",
  },
];

const educations: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Government College University, Faisalabad, Pakistan",
    period: "2020 - 2024",
    desc: "CGPA: 3.28 / 4.00",
  },
  {
    degree: "Intermediate of Computer Science (ICS)",
    institution: "Tips College of Science, Faisalabad, Pakistan",
    period: "2018 - 2020",
  },
  {
    degree: "Matriculation in Science",
    institution: "Government High School, Sheikhupura, Pakistan",
    period: "2015 - 2017",
  },
];

const certificates: Certificate[] = [
  {
    name: "Web Development",
    issuer: "Spirit Idea Tech System, Faisalabad, Pakistan",
    year: "2023",
  },
  {
    name: "Diploma in Computer Office Management",
    issuer: "Quaid-e-Azam Educational College, Faisalabad, Pakistan.",
    year: "2020",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Initialize AOS


    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleSwitchTab = (event: CustomEvent) => {
      const tabIndex = event.detail;
      if (typeof tabIndex === 'number' && tabIndex >= 0 && tabIndex <= 2) {
        setActiveTab(tabIndex);
      }
    };

    window.addEventListener('switchTab' as any, handleSwitchTab as any);
    return () => {
      window.removeEventListener('switchTab' as any, handleSwitchTab as any);
    };
  }, []);

  const tabs = [
    { id: 0, label: "Projects", icon: <Code className="w-5 h-5 mb-2" /> },
    {
      id: 1,
      label: "Qualifications",
      icon: <GraduationCap className="w-5 h-5 mb-2" />,
    },
    { id: 2, label: "Tech Stack", icon: <Boxes className="w-5 h-5 mb-2" /> },
  ];

  // Helper for AOS animation flow
  const getAosAnimation = (index: number) => {
    if (isMobile) return "fade-up"; // Simpler animation on mobile
    const mod = index % 3;
    if (mod === 0) return "fade-up-right";
    if (mod === 1) return "fade-up";
    return "fade-up-left";
  };

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] overflow-hidden pb-10"
      id="Portfolio"
    >
      {/* Header Section */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, qualifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>
      {/* Tabs Section */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundImage: "none",
          overflow: "hidden",
          padding: "10px",
          marginBottom: "40px",
        }}
        className="md:px-4"
      >
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              icon={tab.icon}
              iconPosition="top"
              label={tab.label}
              id={`full-width-tab-${index}`}
              aria-controls={`full-width-tabpanel-${index}`}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                transition: "all 0.3s ease",
                color: "rgba(255, 255, 255, 0.5)",
                "&.Mui-selected": {
                  color: "#fff",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                },
                "& svg": {
                  width: 20,
                  height: 20,
                  marginBottom: "8px",
                  transition: "all 0.3s ease",
                },
                "&.Mui-selected svg": {
                   transform: "scale(1.1)",
                },
                "&:hover": {
                   color: "#fff",
                },
              }}
            />
          ))}
        </Tabs>
      </AppBar>

      {/* Content Section */}
      <div className="min-h-[400px]">
        {/* Tab 0: Projects */}
        {activeTab === 0 && (
          <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
              {projects
                .slice(0, showAllProjects ? projects.length : 6)
                .map((project, index) => (
                  <div
                    key={project.id}
                    data-aos={getAosAnimation(index)}
                    data-aos-duration={index % 2 === 0 ? "1000" : "1200"}
                  >
                    <div className="group relative w-full">
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <div className="relative p-5 z-10">
                          <div className="relative overflow-hidden rounded-lg h-48 sm:h-56">
                            <img
                              src={project.img}
                              alt={project.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="mt-4 space-y-3">
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                              {project.title}
                            </h3>
                            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                              {project.desc}
                            </p>
                            <div className="pt-4 flex items-center justify-between">
                              {project.liveLink ? (
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                >
                                  <span className="text-sm font-medium">
                                    Live Demo
                                  </span>
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              ) : (
                                <span className="text-gray-500 text-sm">
                                  Demo Not Available
                                </span>
                              )}
                              <Link
                                href={project.detailsLink}
                                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                              >
                                <span className="text-sm font-medium">
                                  Details
                                </span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {projects.length > 6 && (
              <div className="mt-6 w-full flex justify-start">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {showAllProjects ? "Show Less" : "See More"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        showAllProjects ? "rotate-180" : "group-hover:translate-y-0.5"
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 1: Qualifications */}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {/* Left Column: Experience */}
            <div
              className="space-y-6"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <BriefcaseBusiness className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="relative mt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300"></div>
                        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="space-y-2">
                        <h6 className="text-base md:text-lg font-semibold text-white group-hover/title:text-white transition-colors">
                          {exp.role}
                        </h6>
                        <p className="text-sm text-gray-300 group-hover/title:text-white transition-colors">
                          {exp.company} <br /> {exp.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Education & Certificates */}
            <div
              className="space-y-6"
              data-aos="fade-up-left"
              data-aos-duration="1200"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Education
                </h3>
                <div className="space-y-4">
                  {educations.map((edu, index) => (
                    <div
                      key={index}
                      className="group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="relative mt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300"></div>
                        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="space-y-2">
                        <h6 className="text-base md:text-lg font-semibold text-white group-hover/title:text-white transition-colors">
                          {edu.degree}
                        </h6>
                        <p className="text-sm text-gray-300 group-hover/title:text-white transition-colors">
                          {edu.institution} <br /> {edu.period}{" "}
                          {edu.desc && (
                            <>
                              <br />
                              {edu.desc}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <Award className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Certificates
                </h3>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div
                      key={index}
                      className="group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="relative mt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300"></div>
                        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="space-y-2">
                        <h6 className="text-base md:text-lg font-semibold text-white group-hover/title:text-white transition-colors">
                          {cert.name}
                        </h6>
                        <p className="text-sm text-gray-300 group-hover/title:text-white transition-colors">
                          {cert.issuer} <br /> {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Tech Stack */}
        {activeTab === 2 && (
          <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  data-aos={getAosAnimation(index)}
                  data-aos-duration={index % 2 === 0 ? "1000" : "1200"}
                  className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                    <div className="relative h-16 w-16 md:h-20 md:w-20">
                      <StackIcon name={tech.stackIconName} className="w-full h-full" variant="dark" />
                    </div>
                  </div>
                  <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
