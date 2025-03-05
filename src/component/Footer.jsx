import React from "react";
import { FaGithub , FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

    const footerLinks = {
        company:[
            {name: 'About', link: '#about'},
            {name: 'Portfolio', link: '#portfolio'},
            {name: 'Pricing', link: '#price'},
            {name: 'Services', link: '#services'},
            {name: 'Testimonials', link: '#testimonials'},
            {name: 'Contact', link: '#contact'},
            
        ],

        Terms:[
            {name: 'FAQ', link: '#'},
            {name: 'Policy', link: '#'},
            {name: 'Terms of Service', link: '#'},
            {name: 'Privacy Policy', link: '#privacy'},
        ],

        contact:[
            {name: 'Phone', link: '#privacy'},
            {name: '1942 Broadway St, Suite 314C, Boulder CO 80302, USA', link: '#contact'},
            
        ],

        support:[
            {name: 'WhatsApp', link: '#contact'},
            {name: 'Support 24', link: '#privacy'},
            {name: 'Chat', link: '#contact'},
           
            
        ]

       
        

        
    }
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
        {/* Brand Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex gap-2 items-center mb-6">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-lg font-bold opacity-75 hover:opacity-100 transition-opacity">
                  J
                </div>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-lg font-bold opacity-100 hover:opacity-75 transition-opacity -ml-2">
                  N
                </div>
              </div>
              <span className="text-xl font-medium ml-1">
                Creativity Matters
              </span>
            </div>
            <p className="text-gray-600 mb-6 md:3/4">
              I am a passionate Digital Innovator with a knack for turning ideas
              into stunning digital experiences.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 
            hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 
            hover:bg-black hover:text-white transition-all duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 
            hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* footer nav */}

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <div key={category}>
                            <h3 className="text-lg font-medium mb-4 uppercase">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link, index) => (
                                        <li key={index} className="sm:text-sm">
                                            <a href="#" className="text-gray-600 flex hover:text-gray-800">{link.name}</a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 text-sm">Copyright © {new Date().getFullYear()} kartiqo.com</p>
                <p className="text-600 text-sm">Created by Joseph Nwani</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
