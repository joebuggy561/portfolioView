import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const navLinks = [
    {
      href: "#home",
      label: "Home",
    },
    {
      href: "#blog",
      label: "Blog",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center gap-1 cursor-pointer" id="home">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-lg font-bold opacity-75 hover:opacity-100 transition-opacity">
            J
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-lg font-bold opacity-100 hover:opacity-75 transition-opacity -ml-2">
            N
          </div>
        </div>

        {/* mobile navigation */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>

        {/* navigation */}
        <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
                <a
                key={index}
                href={link.href}
                onClick={() => setActiveLink(index)}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after-0 hover:after:w-full after:bg-black after transistion-all 
                    ${
                    activeLink === link.href ? "text-gray-900 after:w-full" : "text-black  hover:text-gray-900"
                }`}>
                    {link.label}
                </a>
            ))}
        </div>

        {/* action */}
        <button className="hidden md:block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-300 transistion-all text-sm font-medium transistion-all hover:shadow-lg">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_n0ZKu-OUlJkmCk04Tf-0ArgbFAmkyEK0lq-WoxFRBFQ4sA/viewform?usp=header">Get In Touch</a>
        </button>
      </div>

      {/* mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className=" container mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sn font-medium py-2 ${
                  activeLink === link.href
                    ? "text-black"
                    : "text-gray-600 hover:text-white"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full md:block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transistion-all text-sm font-medium transistion-all hover:shadow-lg">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_n0ZKu-OUlJkmCk04Tf-0ArgbFAmkyEK0lq-WoxFRBFQ4sA/viewform?usp=header">Get In Touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
