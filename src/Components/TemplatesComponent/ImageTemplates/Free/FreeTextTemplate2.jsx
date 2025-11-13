import React from "react";

const FreeTextTemplate2 = () => {
  return (
    <section className="w-[75%] mx-auto my-10 bg-white rounded-md shadow-lg p-8 font-sans">
      {/* Header Section */}
      <header className="text-center border-b pb-4">
        <h1 className="text-3xl font-bold tracking-wide">OLIVIA WILSON</h1>
        <p className="text-sm text-gray-500">Address | Mail | Website</p>
        <h2 className="text-lg font-semibold mt-1 tracking-wider text-gray-700">
          SOFTWARE ENGINEER
        </h2>
      </header>

      {/* TECHNICAL SKILLS */}
      <section className="mt-6">
        <h3 className="bg-[#d7e4dc] font-semibold text-sm px-3 py-1 tracking-wide">
          TECHNICAL SKILLS
        </h3>
        <div className="grid grid-cols-2 text-sm text-gray-700 mt-2 px-4">
          <ul className="list-disc pl-5 space-y-1">
            <li>SwiftExa</li>
            <li>A37++</li>
            <li>StoryBloop XA</li>
          </ul>
          <ul className="list-disc pl-5 space-y-1">
            <li>Data Structures and Algorithm</li>
            <li>APLYX</li>
            <li>HTTMILL</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-6">
        <h3 className="bg-[#d7e4dc] font-semibold text-sm px-3 py-1 tracking-wide">
          PROJECTS
        </h3>
        <div className="px-4 mt-3 text-gray-700 text-sm space-y-3">
          <div>
            <div className="flex justify-between font-semibold text-[13px]">
              <p>
                Instant Chat App | <span className="italic">Lukrasto</span>
              </p>
              <p className="text-gray-500">Oct 2021</p>
            </div>
            <ul className="list-disc pl-5 text-[12px] mt-1">
              <li>Developed a Standard Messaging App Using StoryBloop XA</li>
              <li>
                Improved User Experience During the Usage of the App by
                Eliminating Bugs
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold text-[13px]">
              <p>
                Weather App | <span className="italic">Lukrasto</span>
              </p>
              <p className="text-gray-500">Sept 2021</p>
            </div>
            <ul className="list-disc pl-5 text-[12px] mt-1">
              <li>
                Collect and Analyse user sample Data from different Experience
                Levels of the App
              </li>
              <li>Make Recommendations on Improvement based on Analysis</li>
              <li>Supervise Implementations of Recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mt-6">
        <h3 className="bg-[#d7e4dc] font-semibold text-sm px-3 py-1 tracking-wide">
          EDUCATION
        </h3>
        <div className="px-4 mt-3 text-gray-700 text-sm space-y-3">
          <div>
            <div className="flex justify-between font-semibold text-[13px]">
              <p>
                Computer Science AND Business |{" "}
                <span className="italic">Danliton (Online)</span>
              </p>
              <p className="text-gray-500">May 2021 - Nov 2021</p>
            </div>
            <ul className="list-disc pl-5 text-[12px] mt-1">
              <li>
                Studied Business Software planning, coordination, and efficiency
              </li>
              <li>
                Worked with various industries on Launching efficient IT Systems
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold text-[13px]">
              <p>
                BEng Chemical Engineering |{" "}
                <span className="italic">Royal Clickton</span>
              </p>
              <p className="text-gray-500">Jan 2014 - Sept 2018</p>
            </div>
            <ul className="list-disc pl-5 text-[12px] mt-1">
              <li>GPA: 3.19</li>
              <li>Minor in Process Management</li>
              <li>
                Thesis in Modelling and Analysis of Process Efficiency in a
                Cement Plant
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mt-6">
        <h3 className="bg-[#d7e4dc] font-semibold text-sm px-3 py-1 tracking-wide">
          WORK EXPERIENCE
        </h3>
        <div className="px-4 mt-3 text-gray-700 text-sm space-y-3">
          <div>
            <div className="flex justify-between font-semibold text-[13px]">
              <p>
                Policy Manager | <span className="italic">Lexramax Inc</span>
              </p>
              <p className="text-gray-500">Jan 2021 - Present</p>
            </div>
            <ul className="list-disc pl-5 text-[12px] mt-1">
              <li>
                Formulate and review policies as regards Industry Improvement
              </li>
              <li>
                Create a functional and technical application of set policies
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold text-[13px]">
              <p>
                Quality Control Engineer |{" "}
                <span className="italic">KrystaPointe Water</span>
              </p>
              <p className="text-gray-500">Jan 2019 - Dec 2020</p>
            </div>
            <ul className="list-disc pl-5 text-[12px] mt-1">
              <li>
                Collect and Analyse water samples from different stages of
                Production
              </li>
              <li>Make Recommendations on Improvement based on my analysis</li>
              <li>Supervise Implementations of Recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AWARDS & ACHIEVEMENTS */}
      <section className="mt-6">
        <h3 className="bg-[#d7e4dc] font-semibold text-sm px-3 py-1 tracking-wide">
          AWARDS & ACHIEVEMENTS
        </h3>
        <ul className="list-disc pl-8 text-[12px] text-gray-700 mt-2 space-y-1">
          <li>Most Innovative Employee of the Year, LexraMax (2021)</li>
          <li>Project Leader, Danliton (2021)</li>
          <li>Overall Best New Employee, CrystaPointe (2019)</li>
        </ul>
      </section>
    </section>
  );
};

export default FreeTextTemplate2;
