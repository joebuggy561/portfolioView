import React, { useState } from "react";
import passport from "../assets/passport-photograph.jpg";
import amc from "../assets/amc.png";
import buyaza from "../assets/buyaza.png";
import calender from "../assets/calender.png";
import datamanipulation from "../assets/datamainpulationDubai.png";
import ecommerce from "../assets/ecommerce.png";
import emailtemplate from "../assets/emailtemplate.png";
import newportfolio from "../assets/newportfolio_react.png";
import paymentapp from "../assets/paymentapp.png";
import flyers from "../assets/flyerDubai.png";

const Hero = () => {
  

  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">
      <div>
        <div classNmae='flex items-center justify-end relative md:max-w-[60%] sm:max-w-[60%]'>
            <img src={passport} alt="passport_png" className='rounded-sm relative z-10 hover:scale-105 transition-transform duration-300 object-cover' 
                    style={{
                        maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,20), rgba(0,0,0,0))",
                        WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0))",
                    }}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
