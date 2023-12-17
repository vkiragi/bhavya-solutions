import React from "react";
import ChineseArt from "../assets/chinese-art.jpg";
import Nurse from "../assets/neonatal-nursing.jpg";
import AustralianRefugeeArt from "../assets/australian-refugee.jpg";

const Work = () => {
  return (
    <div id="work-samples" className="w-full md:h-screen bg-[#F5F5DC]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 text-[#2F4F4F] border-[#3CB371] pb-1">
            Work
          </p>
          <p className="py-6">Please take a look at my recent work.</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Chinese Art Box */}
          <div
            style={{ backgroundImage: `url(${ChineseArt})` }}
            className="shadow-lg hover:shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500"
          >
            <a
              href="https://www.bhavyasolutions.com/_files/ugd/249c31_e500f4012b7d408a8444f90acc1bab9d.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex flex-col justify-center items-center text-white"
            >
              <div className="font-bold rounded-md p-4 bg-black bg-opacity-50">
                Contemporary Chinese Queer Art
              </div>
              {/* Additional content or styling if needed */}
            </a>
          </div>

          {/* Nurse Box */}
          <div
            style={{ backgroundImage: `url(${Nurse})` }}
            className="shadow-lg hover:shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500"
          >
            <a
              href="https://www.bhavyasolutions.com/_files/ugd/249c31_49ab66491f8e414dbcb18a6fd3f03711.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex flex-col justify-center items-center text-white"
            >
              <div className="font-bold rounded-md p-4 bg-black bg-opacity-50">
                Neonatal Nursing
              </div>
              {/* Additional content or styling if needed */}
            </a>
          </div>

          {/* Australia Box */}
          <div
            style={{ backgroundImage: `url(${AustralianRefugeeArt})` }}
            className="shadow-lg hover:shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500"
          >
            <a
              href="https://www.bhavyasolutions.com/_files/ugd/249c31_f593ca53f338498e9e66f124a4b97fa4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex flex-col justify-center items-center text-white"
            >
              <div className="font-bold rounded-md p-4 bg-black bg-opacity-50">
                Australia's Refugee Politics
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
