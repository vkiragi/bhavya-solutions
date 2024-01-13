import React from "react";
import { FaEnvelope } from "react-icons/fa";
import profilePic from "/Users/varunkiragi/Documents/Workspace/bhavya-solutions/src/assets/books.jpeg"; // Modify the path as needed

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#F5F5DC]">
      <div className="max-w-[1000px] w-full mx-auto px-8 flex flex-col justify-center h-full sm:text-left text-center">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 items-center sm:items-start">
          <div className="w-full sm:w-1/2">
            <p className="text-emerald-500 mb-2">Hi, I am Mamta Jha!</p>
            <div className="mb-2">
              <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-[#2F4F4F]">
                Bhavya Solutions
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-[#3CB371]">
                Editorial Services
              </h2>
            </div>
            <p className="text-[#2F4F4F] mb-2 max-w-[400px] mx-auto sm:max-w-[500px] lg:max-w-[600px]">
              I provide editing and indexing services for thoughtful texts in a
              wide variety of subjects.
            </p>
            <div className="flex flex-col justify-start items-center sm:items-start">
              <a href="mailto:mamta@bhavyasolutions.com">
                <button className="text-slate-600 group border-slate-600 border-2 rounded-lg px-6 py-3 my-4 flex items-center hover:bg-[#3CB371] hover:border-[#3CB371] transition duration-150">
                  Get in Touch
                  <FaEnvelope className="ml-3 group-hover:text-white duration-150" />
                </button>
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-3/4 xl:w-4/5">
            <img
              src={profilePic}
              alt="Profile"
              className="w-auto h-48 sm:h-full lg:h-auto lg:max-h-[600px] mx-auto rounded-lg self-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
