import React from "react";

const EditingServices = () => {
  return (
    <div
      id="editing-services"
      className="min-h-screen bg-[#F5F5DC] flex items-center justify-center"
    >
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#2F4F4F]">
          <span className="border-b-4 border-[#3CB371] pb-1">
            Editing Services
          </span>
        </h1>
        <div className="bg-white p-10 rounded-md shadow-md">
          <ul className="list-disc pl-5 text-gray-800">
            <li className="mb-2">
              Editing for non-fiction content: books, journal and magazine
              articles, reports, practice standards, catalogues, and résumés.
            </li>
            <li className="mb-2">
              Enhancements to the structure to ensure readers can easily follow
              your message and ‘narrative’
            </li>
            <li className="mb-2">
              Checks to ensure clear, idiomatic and unambiguous use of English.
            </li>
            <li className="mb-2">
              Assistance ensuring consistent use of tone and voice, so as to
              communicate effectively with your target audience.
            </li>
            <li className="mb-2">
              Implementation of your chosen style guide (e.g. house style or
              Chicago) and any tone or terminology guidance.
            </li>
            <li className="mb-2">
              Checks to ensure specialist terminology and abbreviations have
              been used appropriately and consistently.
            </li>
            <li className="mb-2">
              Updates to ensure any required template or scheme has been
              followed.
            </li>
            <li className="mb-2">
              Updates to ensure tables, figures, boxes and other special
              elements are used effectively and align with the main text.
            </li>
            <li className="mb-2">Fact-checking and copyright checks.</li>
            <li className="mb-2">
              My competitive rates are based on my extensive experience and
              education, and are negotiable as needed.
            </li>
            <li className="mb-2">
              Please contact me for rates, which are negotiable depending on the
              project:{" "}
              <a
                href="mailto:mamta@bhavyasolutions.com"
                className="text-green-800 hover:text-green-500 duration-150"
              >
                mamta@bhavyasolutions.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditingServices;
