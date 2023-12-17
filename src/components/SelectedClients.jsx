import React from "react";

const SelectedClients = () => (
  <div
    id="selected-clients"
    className="min-h-screen bg-[#F5F5DC] flex items-center justify-center"
  >
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2F4F4F]">
        <span className="border-b-4 border-[#3CB371] pb-1">Selected Clients</span>
      </h1>
      <div className="bg-white p-10 rounded-md shadow-md cursor-default">
        <ul className="list-disc pl-5 text-gray-800">
          <li className="mb-2">
          APHA (American Public Health Association)
          </li>
          <li className="mb-2">
          ANA (American Nurses Association)
          </li>
          <li className="mb-2">
          ASME (American Society of Mechanical Engineers)
          </li>
          <li className="mb-2">
          Cambridge University Press (Embedded Indexing)
          </li>
          <li className="mb-2">
          Oxford University Press (OUP)
          </li>
          <li className="mb-2">
          Routledge
          </li>
          <li className="mb-2">
          Scrivener
          </li>
          <li className="mb-2">
          T&F
          </li>
          <li className="mb-2">
          University of California Press
          </li>
          <li className="mb-2">
          University of Florida Press
          </li>
          <li className="mb-2">
          University of Delaware press
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SelectedClients;
