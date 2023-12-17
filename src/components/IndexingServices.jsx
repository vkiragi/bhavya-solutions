import React from "react";

const IndexingServices = () => {
  return (
    <div
      id="indexing-services"
      className="min-h-screen bg-[#F5F5DC] flex items-center justify-center"
    >
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#2F4F4F]">
          <span className="border-b-4 border-[#3CB371] pb-1">
            Indexing Services
          </span>
        </h1>

        <div className="bg-white p-10 rounded-md shadow-md">
          <p className="text-gray-800">
            <li>
              I specialize in back-of-the-book indexing, embedded indexing, and
              abstracting services.
            </li>
            <li>
              I index textbooks, trade books, and scholarly works from
              manuscripts submitted as PDF files.
            </li>
            <li>
              I work on LaTex, InDesign, and word files for embedded indexing.
            </li>
            <li>
              Back-of-the-book indexes are created in Cindex and returned as MS
              Word .docx or .rtf files.
            </li>
            <li>
              I specialize in a wide variety of subjects. Areas of expertise
              include, but are not limited to:
              <ol className="list-decimal pl-12">
                <li>teaching and education</li>
                <li>psychology and social sciences</li>
                <li>finance and money management</li>
                <li>business</li>
                <li>geopolitics</li>
              </ol>
            </li>
            <li>
              Charges are computed per indexable page for trade books,
              textbooks, and scholarly works. Special formats can be computed by
              word count.
            </li>
            <li>
              I provide swift turnover, reasonable prices, and one-on-one
              guidance and feedback on all projects.
            </li>
            <li>
              Please contact me for rates, which are negotiable depending on the
              project:{" "}
              <a
                href="mailto:mamta@bhavyasolutions.com"
                className="text-green-800 hover:text-green-500 duration-150"
              >
                mamta@bhavyasolutions.com
              </a>
            </li>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default IndexingServices;
