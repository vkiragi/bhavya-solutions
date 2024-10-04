import React, { useEffect } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const emailAddress = "mamta@bhavyasolutions.com";

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="contact"
      className="min-h-screen bg-[#F5F5DC] flex items-center justify-center"
    >
      <div className="text-center flex flex-col items-center p-16 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-slate-600">Get in touch</h1>

        {/* <p className="text-2xl font-semibold text-gray-800 mb-4">
          Email me here, or find me on LinkedIn.
        </p> */}

        <button
          type="button"
          className="text-slate-600 group border-slate-600 border-2 rounded-lg px-6 py-3 my-2 flex items-center transition-colors duration-300 hover:bg-[#3CB371] hover:border-[#3CB371]"
          onClick={handleClick}
        >
          Email me
          <FaEnvelope className="ml-3 group-hover:text-white duration-150 text-3xl" />
        </button>

        <a
          className="text-slate-600 group border-slate-600 border-2 rounded-lg px-6 py-3 my-2 flex items-center transition-colors duration-300 hover:bg-[#3CB371] hover:border-[#3CB371]"
          href={`https://www.linkedin.com/in/mamta-jha-7443911a/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on LinkedIn
          <FaLinkedin className="ml-3 group-hover:text-white duration-150 text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
