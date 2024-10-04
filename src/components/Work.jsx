import React from "react";
import MediationArt from "../assets/mediation.jpg";
import FatalArt from "../assets/fatal.jpeg";
import AustraliaArt from "../assets/australia.jpg";
import BackcountryWar from "../assets/Backcountry-War.jpg";
const Work = () => {
  return (
    <div id="work-samples" className="w-full md:h-screen bg-[#F5F5DC]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-4xl font-bold inline border-b-4 text-[#2F4F4F] border-[#3CB371] pb-1">
            Work
          </p>
          <p className="py-6">Please take a look at my recent indexing work.</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Backcountry War Box */}
          <div
            style={{ backgroundImage: `url(${BackcountryWar})` }}
            className="shadow-lg hover:shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500"
          >
            <a
              href="Backcountry_War_Index.pdf"
              download="Backcountry_War_Index.pdf"
              className="w-full h-full flex flex-col justify-center items-center text-white"
            >
              {/* <div className="font-bold rounded-md p-4 bg-black bg-opacity-50">
                Mediation as Negotiation of Meanings
              </div> */}
            </a>
          </div>

          {/* Fatal Denial Box */}
          <div
            style={{ backgroundImage: `url(${FatalArt})` }}
            className="shadow-lg hover:shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500"
          >
            <a
              href="Fatal Denial_Index.pdf"
              download="Fatal_Denial_Index.pdf"
              className="w-full h-full flex flex-col justify-center items-center text-white"
            >
              {/* <div className="font-bold rounded-md p-4 bg-black bg-opacity-50">
                Fatal Denial
              </div> */}
            </a>
          </div>

          {/* Australia Box */}
          <div
            style={{ backgroundImage: `url(${AustraliaArt})` }}
            className="shadow-lg hover:shadow-xl group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500"
          >
            <a
              href="Australia's Refugee Politics_Index.pdf"
              download="Australia's_Refugee_Politics_Index.pdf"
              className="w-full h-full flex flex-col justify-center items-center text-white"
            >
              {/* <div className="font-bold rounded-md p-4 bg-black bg-opacity-50">
                Australia's Refugee Politics
              </div> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
