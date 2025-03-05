import React from "react";
import amc from "../assets/amc.png";
import buyaza from "../assets/buyaza.png";
import calender from "../assets/calender.png";
import dataminipulation from "../assets/datamainpulationDubai.png";
import ecommerce from "../assets/ecommerce.png";
import carrentals from "../assets/elzodrentals.png";
import emailtemplate from "../assets/emailtemplate.png";
import newportfolio from "../assets/newportfolio_react.png";
import paymentapp from "../assets/paymentapp.png";
import flyers from "../assets/flyerDubai.png";
import emailfmt from "../assets/emailformat.png";
const Portfolio = () => {
  const workings = [
    {
      id: 1,
      image: amc,
      title: "AMC",
      description: "Voting website",
      language: "Html, Css, Javascript",
      link: "https://github.com/joebuggy561/AMCVOTINGSITE",
    },
    {
      id: 2,
      image: buyaza,
      title: "Buyaza",  
      description: "E-commerce website",
      language: "Html, Css, Javascript",
      link: "https://imgur.com/a/zivziDI",
    },
    {
      id: 3,
      image: calender,
      title: "Calender",
      description: "setup meetings, events, holidays and more",
      language: "Google Calender",
      link: "https://imgur.com/a/GkdQEol ",
    },
    {
      id: 4,
      image: dataminipulation,
      title: "Data Manipulation",
      description: "Data Manipulation",
      language: "Excel,Python",
      link: "https://imgur.com/a/NHGXQUD",
    },
    {
      id: 5,
      image: ecommerce,
      title: "E-commerce",
      description: "E-commerce website",
      language: "Django",
      link: "https://github.com/joebuggy561/megashopapp",
    },
    {
      id: 6,
      image: carrentals,
      title: "Car Rentals",
      description: "Elzod Car Rentals website",
      language: "Django",
      link: "https://github.com/joebuggy561/Elzodrentals",
    },
    {
      id: 7,
      image: emailtemplate,
      title: "Email Template",
      description: " Zebuacus Token Email Template",
      language: "Html, Css, Javascript",
      link: "https://imgur.com/a/xa3PgmD",
    },
    {
      id: 8,
      image: newportfolio,
      title: "Portfolio",
      description: "Portfolio",
      language: "React",
      link: "",
    },
    {
      id: 9,
      image: paymentapp,
      title: "Payment App",
      description: "Payment App using django",
      language: "Django",
      link: "https://github.com/joebuggy561/Payment",
    },
    {
      id: 10,
      image: flyers,
      title: "Flyers",
      description: "Tech tutorials for beginners",
      language: "Figma",
      link:'https://imgur.com/a/dwGTQEV'
    },
    {
      id: 11,
      image: emailfmt,
      title: "Email Format",
      description: "Professional Email Format for realestate company",
      link:"https://imgur.com/a/xa3PgmD"
    },
  ];
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">Portfolio</h2>
      </div>
      {/* card grid */}
      <div className="max-w-[4000px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
  {workings.map((work) => (
    <div key={work.id}>
      <div className="rounded overflow-hidden shadow-lg ">
        <img className="w-full" src={work.image} alt={work.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{work.title}</div>
          <p className="text-gray-700 text-base">{work.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-black text-white  hover:bg-amber-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <a href="#">View</a>
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

     
 
   

    </section>
  );
};

export default Portfolio;
