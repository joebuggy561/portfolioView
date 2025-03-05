import React from "react";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    emailjs.init("fQumWAVplS6YHb3Dv");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .sendForm("service_4grklhy", "template_ufvkrai", event.target)
      .then(() => {
        event.target.reset();
        setLoading(false);
        setMessage("Email Sent Successfully!");
      })
      .catch(() => {
        setLoading(false);
        setMessage("Email Not Sent. Try again.");
      });
  };

  return (
    <section className="max-w-md container mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">Contact Me</h2>
        <p>You can always inquire for more details🚀</p>
      </div>
      <div className="items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4" id="contactForm">
          <div>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="text-center mt-12">
            <button
              type="submit"
              className="bg-black text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        
        {message && (
          <p className={`text-center mt-4 ${message.includes("Successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
