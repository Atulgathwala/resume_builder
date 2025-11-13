import React from "react";

const PaidTextTemplate3 = () => {
  return (
    <section className="w-[75%] mx-auto my-10 bg-white rounded-md shadow-lg p-10 font-sans text-gray-800">
      {/* Header Section */}
      <header className="border-b pb-3">
        <h1 className="text-3xl font-bold tracking-wide">ESTELLE DARCY</h1>
        <h2 className="text-lg font-semibold text-gray-700 mt-1">
          PROCESS ENGINEER
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          123 Anywhere St., Any City | hello@reallygreatsite.com |{" "}
          <a href="#" className="text-blue-600 underline">
            www.reallygreatsite.com
          </a>
        </p>
      </header>

      {/* SUMMARY */}
      <section className="mt-6">
        <h3 className="font-semibold text-sm border-b pb-1">SUMMARY</h3>
        <p className="text-sm mt-2 leading-relaxed text-gray-700">
          Practical Engineer with Significant Experience in Process Design, I
          have worked with some organizations, ensuring a grounded approach to
          my profession, leveraging my expertise to optimize processes and
          deliver innovative solutions that meet business objectives.
        </p>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="mt-6">
        <h3 className="font-semibold text-sm border-b pb-1">
          PROFESSIONAL EXPERIENCE
        </h3>

        {/* First Experience */}
        <div className="mt-3">
          <div className="flex justify-between font-semibold text-[13px]">
            <p>Instrument Tech, Morcelle Program</p>
            <p className="text-gray-500">Jan 2024 - Present</p>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1 space-y-1 text-gray-700">
            <li>
              Led development of an advanced automation system, achieving a 15%
              increase in operational efficiency.
            </li>
            <li>
              Streamlined manufacturing processes, reducing production costs by
              10%.
            </li>
            <li>
              Implemented preventive maintenance strategies, resulting in a 20%
              decrease in equipment downtime.
            </li>
          </ul>
        </div>

        {/* Second Experience */}
        <div className="mt-4">
          <div className="flex justify-between font-semibold text-[13px]">
            <p>Internship, XarrowAI Industries</p>
            <p className="text-gray-500">Jun 2022 - Aug 2022</p>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1 space-y-1 text-gray-700">
            <li>
              Designed and optimised a robotic control system, realizing a 12%
              performance improvement.
            </li>
            <li>
              Coordinated testing and validation, ensuring compliance with
              industry standards.
            </li>
            <li>
              Provided technical expertise, contributing to a 15% reduction in
              system failures.
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-6">
        <h3 className="font-semibold text-sm border-b pb-1">PROJECTS</h3>

        <div className="mt-3">
          <div className="flex justify-between font-semibold text-[13px]">
            <p>Industrial Basics and General Application</p>
            <p className="text-gray-500">Jan 2023 - Jun 2023</p>
          </div>
          <p className="italic text-sm text-gray-600">
            University of Engineering Process Cohort
          </p>
          <ul className="list-disc pl-5 text-sm mt-1 space-y-1 text-gray-700">
            <li>Automotive Technology.</li>
            <li>
              Technological Advancements within the current Chemical & Process
              Industry.
            </li>
            <li>Other relevant information.</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-6">
        <h3 className="font-semibold text-sm border-b pb-1">SKILLS</h3>

        <div className="grid grid-cols-3 text-sm mt-2 text-gray-700">
          <p>Prototyping Tools</p>
          <p>Interaction Design</p>
          <p>Accessibility</p>
          <p>User Research</p>
          <p>Visual Design</p>
          <p>Responsive Design</p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mt-6">
        <h3 className="font-semibold text-sm border-b pb-1">EDUCATION</h3>

        <div className="mt-3">
          <div className="flex justify-between font-semibold text-[13px]">
            <p>
              Bachelor of Design in Process Engineering |{" "}
              <span className="italic">Engineering University</span>
            </p>
            <p className="text-gray-500">Sep 2019 - Sep 2023</p>
          </div>
          <ul className="list-disc pl-5 text-sm mt-1 text-gray-700">
            <li>
              Relevant coursework in Process Design and Project Management.
            </li>
          </ul>
        </div>
      </section>

      {/* ADDITIONAL INFORMATION */}
      <section className="mt-6">
        <h3 className="font-semibold text-sm border-b pb-1">
          ADDITIONAL INFORMATION
        </h3>

        <ul className="list-disc pl-5 text-sm mt-2 space-y-1 text-gray-700">
          <li>
            <span className="font-semibold">Languages:</span> English, French,
            Mandarin.
          </li>
          <li>
            <span className="font-semibold">Certifications:</span> Professional
            Design Engineer (PDE) License, Project Management Tech (PMT),
            Structural Process Design (SPD).
          </li>
          <li>
            <span className="font-semibold">Awards/Activities:</span> Most
            Innovative Intern of the Year (2022), Overall Best Intern, Division
            Two (2022), Onboarding Project Lead (2024).
          </li>
        </ul>
      </section>
    </section>
  );
};

export default PaidTextTemplate3;
