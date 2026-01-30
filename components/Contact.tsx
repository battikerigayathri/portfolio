"use client";

import React from "react";
import {
  Share2,
  User,
  Mail,
  MessageSquare,
  Send,
  Linkedin,
  ExternalLink,
  Github,
  Facebook,
  Instagram,
  MessageCircle,
  CircleUserRound,
} from "lucide-react";

const comments = [
  { name: "riya", date: "Dec 18, 2025", text: "nice website" },
  { name: "rabi yzidek", date: "Dec 12, 2025", text: "rabi yzidek" },
  {
    name: "Michael Kikelstein",
    date: "Oct 2, 2025",
    text: "I control the banks and I wear a small hat!",
  },
  {
    name: "Jokel",
    date: "Jul 4, 2025",
    text: "I am interested in your carrer. so if you interested in my project, contact me\n\ni can pay you high",
  },
  { name: "M", date: "Jul 2, 2025", text: "Great website!" },
  {
    name: "Jack Lin",
    date: "Jun 17, 2025",
    text: "I am interested in your carrer.\nso if you interested in my project, contact me",
  },
  {
    name: "Ahmad Ali",
    date: "May 17, 2025",
    text: "Gayathri’s portfolio is a masterclass in modern web development. Every project showcases not just technical precision, but serious creative flair. The UI/UX transitions, performance optimizations, and responsiveness blew me away. This isn’t just coding—it’s digital craftsmanship. 🔥 Can’t wait to collaborate on something epic!",
  },
  {
    name: "Zainul Abidin",
    date: "Apr 28, 2025",
    text: "Bro, your portfolio’s insane 🔥! From “just a quick site” to pure magic—those animations? Love them! Proud of you, man. Let’s grab chai soon and flex about this IRL! 🚀",
  },
  {
    name: "Emily Johnson",
    date: "Apr 23, 2025",
    text: "Gayathri’s expertise in Laravel and clean code architecture is remarkable. His communication skills and adherence to best practices made our UK e-commerce project a smooth success. Highly recommended for precision-driven development!",
  },
  {
    name: "Noman Tariq",
    date: "Jan 31, 2025",
    text: "Gayathri is an exceptional developer! His attention to detail and problem-solving skills made our collaboration smooth. He delivers clean, optimized code and always meets deadlines. Highly recommended!",
  },
  {
    name: "Umair Javed",
    date: "Jan 31, 2025",
    text: "Working with Gayathri was a great experience. His expertise in front-end development, particularly with React and Tailwind CSS, helped streamline our project's UI/UX. A truly skilled professional!",
  },
  {
    name: "Taha Umer",
    date: "Jan 31, 2025",
    text: "Gayathri’s ability to integrate modern web technologies into our project was impressive. He writes efficient, scalable code and is always willing to go the extra mile. Looking forward to working with him again!",
  },
  {
    name: "Anaya Khan",
    date: "Jan 31, 2025",
    text: "Gayathri understands the importance of design and functionality. His implementation of animations and interactive UI elements brought my designs to life beautifully. A pleasure to work with!",
  },
  {
    name: "Mehwish Ahmed",
    date: "Jan 31, 2025",
    text: "Gayathri’s expertise in React and Framer Motion is outstanding. His keen eye for UI/UX and structured coding approach make him a great asset to any project. Highly recommended!",
  },
];

const Contact = () => {
  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
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
            Contact Me
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center px-[5%] md:px-[10%]"
        id="contact"
      >
        <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            <form
              action="https://formsubmit.co/d093a66da1c43c96cd03cf7172297b41"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                  required
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                  required
                ></textarea>
              </div>

              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
              <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
                  Connect With Me
                </h3>

                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.linkedin.com/in/gayathri-battikeri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#0a66c2] to-[#377abd]"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
                          style={{ backgroundColor: "#0a66c2" }}
                        ></div>
                        <div className="relative p-2 rounded-md">
                          <Linkedin
                            className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                            style={{ color: "#0a66c2" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                          Let's Connect
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          on LinkedIn
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                  </a>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="https://x.com/gayathribattikeri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#000000] to-[#000]"></div>
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                          style={{ backgroundColor: "#ffffff" }}
                        ></div>
                        <div className="relative p-2 rounded-lg transition-all duration-500 group-hover:scale-110">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="#fff"
                              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                          X
                        </span>
                        <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                          gayathribattikeri
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/gayathribattikeri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#333] to-[#24292e]"></div>
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                          style={{ backgroundColor: "#ffffff" }}
                        ></div>
                        <div className="relative p-2 rounded-lg">
                          <Github
                            className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                            style={{ color: "#ffffff" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                          Github
                        </span>
                        <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                          gayathribattikeri
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="https://facebook.com/gayathribattikeri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#0866ff] to-[#428aff]"></div>
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                          style={{ backgroundColor: "#0866ff" }}
                        ></div>
                        <div className="relative p-2 rounded-lg">
                          <Facebook
                            className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                            style={{ color: "#0866ff" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                          Facebook
                        </span>
                        <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                          gayathribattikeri
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/gayathribattikeri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45]"></div>
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
                          style={{ backgroundColor: "#e4405f" }}
                        ></div>
                        <div className="relative p-2 rounded-lg">
                          <Instagram
                            className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                            style={{ color: "#e4405f" }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                          Instagram
                        </span>
                        <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                          gayathribattikeri
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transform transition-all duration-300 hover:shadow-[#6366f1]/10">
            <div
              className="w-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="p-6 border-b border-white/10"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/20">
                    <MessageCircle className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Comments{" "}
                    <span className="text-indigo-400">({comments.length})</span>
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <form className="space-y-6">
                    <div
                      className="space-y-2"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <label className="block text-sm font-medium text-white">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        required
                      />
                    </div>
                    <div
                      className="space-y-2"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <label className="block text-sm font-medium text-white">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        placeholder="Write your message here..."
                        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none min-h-[120px]"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="relative w-full h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Post Comment</span>
                      </div>
                    </button>
                  </form>
                </div>

                <div
                  className="space-y-4 h-[500px] overflow-y-auto custom-scrollbar"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {comments.map((comment, index) => (
                    <div
                      key={index}
                      className="px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                          <CircleUserRound className="w-5 h-5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <h4 className="font-medium text-white truncate">
                              {comment.name}
                            </h4>
                            <span className="text-xs text-gray-400 whitespace-nowrap">
                              {comment.date}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm break-words leading-relaxed relative bottom-2">
                            {comment.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.5);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.7);
        }
      `}</style>
    </>
  );
};

export default Contact;
