"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setactive] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const linkClasses = `
    relative 
    px-3 py-2 text-xl font-medium
    text-[#e2d3fd] hover:text-white
    transition-all duration-300
    after:content-[""]
    after:absolute after:left-0 after:bottom-0
    after:h-[4px] after:w-0
    after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7]
    hover:after:w-full
    after:transition-all after:duration-300
  `;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className=" flex justify-between  items-center pl-40 pr-45 py-6 backdrop-blur-md">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="logo" height={80} width={80} />
        </div>

        {/* Navigation */}
        <div className="flex gap-10 text-xl items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              onClick={() => setactive(item.name)}
              href={item.href}
              className={`${linkClasses} ${
                active === item.name
                  ? "gradient-text after:w-full"
                  : "text-[#e2d3fd] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
