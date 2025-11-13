import React from "react";

const PaidImgTemplate4 = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden font-sans my-10">
      {/* Header */}
      <div className="flex justify-between items-center bg-[#4cb3b3] px-10 py-8">
        <div>
          <h1
            contentEditable="true"
            suppressContentEditableWarning="true"
            className="text-3xl font-semibold text-gray-900"
          >
            Anna Katrina Marchesird
          </h1>
          <p className="text-lg text-gray-800 mt-1">Financial Manager</p>
        </div>
        <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden">
          <img
            src="/src/Assets/Images/DemoImageWithBg.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex px-10 py-8 gap-8">
        {/* Left Column */}
        <div className="w-3/5 space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-[#209090] uppercase font-semibold mb-2">
              My Education
            </h3>
            <p className="font-semibold text-gray-800">
              Bachelor of Science in Finance
            </p>
            <p className="text-gray-700">Borcelle University</p>
            <p className="text-gray-500 text-sm">Graduate 2017</p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-[#209090] uppercase font-semibold mb-3">
              Work Experience
            </h3>

            <div className="mb-6">
              <span className="bg-[#209090] text-white text-xs px-3 py-1 rounded-md">
                Financial Manager
              </span>
              <p className="font-semibold mt-2">Fauget Corporate — 2019</p>
              <p className="text-gray-700 text-sm mt-1">
                Developed and executed financial strategies, resulting in a 15%
                increase in company profits within the first year.
              </p>
            </div>

            <div>
              <span className="bg-[#209090] text-white text-xs px-3 py-1 rounded-md">
                Financial Analyst
              </span>
              <p className="font-semibold mt-2">Larana Corp — 2018</p>
              <p className="text-gray-700 text-sm mt-1">
                Prepared detailed financial reports, including balance sheets,
                income statements, and cash flow statements, for senior
                management.
              </p>
            </div>
          </div>

          {/* Achievement */}
          <div>
            <h3 className="text-[#209090] uppercase font-semibold mb-2">
              Achievement
            </h3>
            <p className="text-gray-700 text-sm">
              Successfully managed a team that secured a $1 million investment
              from a prominent investor to fund company expansion.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/5 bg-[#f8fafa] rounded-lg p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-[#209090] uppercase font-semibold mb-2">
              My Description
            </h3>
            <p className="text-gray-700 text-sm">
              Dedicated and results-oriented Financial Manager with a strong
              background in financial planning, analysis, and management.
            </p>
          </div>

          {/* Contact */}
          <div className="text-sm text-gray-700 space-y-1">
            <p>📞 +123-456-7890</p>
            <p>📧 hello@reallygreatsite.com</p>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-[#209090] uppercase font-semibold mb-2">
              My Soft Skills
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span>Financial Planning</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-[#209090] h-2 rounded-full w-[90%]" />
                </div>
              </li>
              <li className="flex justify-between text-sm">
                <span>Team Leadership</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-[#209090] h-2 rounded-full w-[85%]" />
                </div>
              </li>
              <li className="flex justify-between text-sm">
                <span>Risk Management</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-[#209090] h-2 rounded-full w-[80%]" />
                </div>
              </li>
              <li className="flex justify-between text-sm">
                <span>Financial Reporting</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-[#209090] h-2 rounded-full w-[95%]" />
                </div>
              </li>
            </ul>
          </div>

          {/* Reference */}
          <div>
            <h3 className="text-[#209090] uppercase font-semibold mb-2">
              Reference
            </h3>
            <p className="text-gray-800 font-semibold">Benjamin Shah</p>
            <p className="text-gray-700 text-sm">hello@reallygreatsite.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidImgTemplate4;
