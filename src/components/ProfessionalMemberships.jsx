import React from "react";

const ProfessionalMemberships = () => (
  <div
    id="ProfessionalMemberships"
    className="min-h-screen bg-[#F5F5DC] flex items-center justify-center"
  >
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2F4F4F]">
        <span className="border-b-4 border-[#3CB371] pb-1">
          Professional Memberships and Volunteering
        </span>
      </h1>
      <div className="bg-white p-10 rounded-md shadow-md cursor-default">
        <ul className="list-disc pl-5 text-gray-800">
          <li className="mb-2">American Society for Indexing</li>
          <li className="mb-2">
            Indexing Society of Canada / Société canadienne d’indexation
            (ISC/SCI)
          </li>
          <li className="mb-2">Editorial Freelancers Association</li>
          <li className="mb-2">ASI membership commitee - Chair</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProfessionalMemberships;
