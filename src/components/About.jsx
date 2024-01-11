import React from "react";
import selfie from "/Users/varunkiragi/Documents/Workspace/bhavya-solutions/src/assets/selfie.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="flex items-center justify-center min-h-screen bg-[#F5F5DC] p-4 sm:p-10"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#2F4F4F]">
          <span className="border-b-4 border-[#3CB371] pb-1">About</span>
        </h1>
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Profile Picture */}
          <div className="w-full sm:w-1/3">
            <figure>
              <img
                src={selfie}
                alt="Profile"
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-sm text-gray-600 mt-4 ml-2">
                I was featured in the spotlight section of the October 2022
                issue of ASI's monthly newsletter,{" "}
                <a
                  href="https://www.asindexing.org/newsletter/see-also-october-2022/#spotlight"
                  className="text-green-500 hover:text-green-400"
                  style={{ textDecoration: "none" }}
                >
                  See also
                </a>{" "}
                and{" "}
                <a
                  href="https://indexers.ca/wp-content/uploads/2023/09/Bulletin-2023-02-FINAL-v3.pdf"
                  className="text-green-500 hover:text-green-400"
                  style={{ textDecoration: "none" }}
                >
                  Summer 2023
                </a>
                edition of the ISC/SCI Bulletin.
              </figcaption>
            </figure>
          </div>
          {/* Content */}
          <div className="w-full sm:w-2/3 p-4 sm:p-6 text-center sm:text-left">
            {/* Education */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Education
              </h2>
              <div className="text-base text-[#2F4F4F] mb-3">
                <ul className="list-disc pl-5">
                  <li>
                    Specialized certificate in copyediting from University of
                    California, San Diego.
                  </li>
                  <li>
                    Indexing training course from the American Society of
                    Indexing (ASI).
                  </li>
                  <li>
                    Taxonomy and controlled vocabulary training course from
                    taxonomist Heather Hedden, June 2020
                  </li>
                  <li>
                    Climbing Camelback: Intermediate and Advanced Topics in
                    Indexing, ASI 2019 Conference, Scottsdale
                  </li>
                  <li>
                    Practical Introduction to Indexing, ASI 2013 Conference, San
                    Antonio
                  </li>
                  <li>
                    BS (Biology), MBA(Operations), Professional Diploma in Web
                    Centric Computing
                  </li>
                </ul>
              </div>
            </div>
            {/* Professional Memberships */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Professional Memberships
              </h2>
              <div className="text-base text-[#2F4F4F] mb-3">
                <ul className="list-disc pl-5">
                  <li>American Society for Indexing</li>
                  <li>
                    Indexing Society of Canada / Société canadienne d’indexation
                    (ISC/SCI)
                  </li>
                  <li>Editorial Freelancers Association</li>
                  <li>ASI membership committee - Chair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
