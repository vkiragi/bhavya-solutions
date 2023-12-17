import React from "react";
import { FaEnvelope } from "react-icons/fa";
import profilePic from "/Users/varunkiragi/Documents/Workspace/bhavya-solutions/src/assets/books.jpeg";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#F5F5DC]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex space-x-10">
          <div className="w-1/2 pr-10">
            <p className="text-emerald-500 mb-2">Hi, I am Mamta Jha! </p>
            <div className="mb-2">
              <h1 className="text-4xl sm:text-7xl font-bold text-[#2F4F4F] ml-[-5px]">
                Bhavya Solutions
              </h1>
              <h2 className="text-4xl sm:text-6xl font-bold text-[#3CB371] ml-[-5px]">
                Editorial Services
              </h2>
            </div>
            <p className="text-[#2F4F4F] mb-2 max-w-[700px] mr-6">
              I provide editing and indexing services for thoughtful texts in a
              wide variety of subjects.
            </p>

            <div className="flex-col justify-start items-start">
              <a href="mailto:mamta@bhavyasolutions.com">
                <button className="text-slate-600 group border-slate-600 border-2 rounded-lg px-6 py-3 my-4 flex items-center hover:bg-[#3CB371] hover:border-[#3CB371] transition duration-150">
                  Get in Touch
                  <FaEnvelope className="ml-3 group-hover:text-white duration-150" />
                </button>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic w-auto h-full mx-auto rounded-lg self-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
