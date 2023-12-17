import React from "react";

const Education = () => (
  <div
    id="education"
    className="min-h-screen bg-[#F5F5DC] flex items-center justify-center"
  >
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2F4F4F]">
        <span className="border-b-4 border-[#3CB371] pb-1">Education</span>
      </h1>
      <div className="bg-white p-10 rounded-md shadow-md cursor-default">
        <ul className="list-disc pl-5 text-gray-800">
          <li className="mb-2">
            Specialized certificate in copyediting from University of
            California, San Diego.
          </li>
          <li className="mb-2">
            Indexing training course from the American Society of Indexing
            (ASI).
          </li>
          <li className="mb-2">
            Taxonomy and controlled vocabulary training course from taxonomist
            Heather Hedden, June 2020
          </li>
          <li className="mb-2">
            Climbing Camelback: Intermediate and Advanced Topics in Indexing,
            ASI 2019 Conference, Scottsdale
          </li>
          <li className="mb-2">
            Practical Introduction to Indexing, ASI 2013 Conference, San Antonio
          </li>
          <li className="mb-2">
            BS (Biology), MBA(Operations), Professional Diploma in Web Centric
            Computing
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Education;
