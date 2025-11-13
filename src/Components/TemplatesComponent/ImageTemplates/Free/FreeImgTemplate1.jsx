import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

const FreeImgTemplate1 = () => {
  return (
    <section className="flex justify-center items-center my-10">
      <article className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden font-sans">
        {/* LEFT SIDE (Full Template Box) */}
        <aside className="w-full flex justify-center items-center">
          <main className="w-full rounded-md overflow-hidden">
            {/* HEADER */}
            <header className="flex justify-end items-center h-[250px]">
              <div className="bg-[#798777] w-[90%] h-[85%] rounded-l-full flex items-center shadow-sm">
                <div className="flex items-center pl-10 w-[40%] h-full">
                  <img
                    src="/src/Assets/Images/DemoImageWithBg.png"
                    alt="Profile"
                    className="h-[160px] w-[160px] border-4 border-white rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="text-white leading-tight">
                  <h1 className="text-5xl font-bold">Shawn Garcia</h1>
                  <h2 className="text-lg font-light">Business Analyst</h2>
                </div>
              </div>
            </header>

            {/* BODY */}
            <footer className="flex text-[#60665B] py-8 px-10">
              {/* LEFT INNER SIDE */}
              <aside className="w-1/2 bg-[#DAE6D7] py-4 px-5 rounded-tr-3xl space-y-4">
                <div>
                  <h2 className="font-bold text-sm mb-1">About Me</h2>
                  <p className="text-xs leading-4">
                    I am a talented, ambitious, and hardworking individual, with
                    broad skills and experience in Digital Business Marketing.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-sm mb-1">Experience</h1>
                  <div className="space-y-2 text-xs">
                    <div>
                      <h2 className="font-semibold text-[#9EA99A]">
                        Reallygreatsite.com
                      </h2>
                      <h3 className="font-medium text-[#7d807b]">
                        2016 - 2018
                      </h3>
                      <p>
                        • Business Marketing
                        <br />• Business Development
                      </p>
                    </div>

                    <div>
                      <h2 className="font-semibold text-[#9EA99A]">
                        Reallygreatsite Corps.
                      </h2>
                      <h3 className="font-medium text-[#7d807b]">
                        2018 - 2021
                      </h3>
                      <p>• Supervisor of Marketing Division</p>
                    </div>

                    <div>
                      <h2 className="font-semibold text-[#9EA99A]">
                        Reallygreatsite Co.
                      </h2>
                      <h3 className="font-medium text-[#7d807b]">
                        2021 - Present
                      </h3>
                      <p>• Marketing Supervisor</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* RIGHT INNER SIDE */}
              <aside className="w-1/2 py-4 px-5 flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-sm mb-1">Education</h2>
                  <p className="text-xs font-semibold">
                    Reallygreatsite University
                  </p>
                  <p className="text-xs">2014 - 2018</p>
                  <p className="text-xs italic">Master of Business</p>
                </div>

                <div>
                  <h2 className="font-bold text-sm mb-1">Skills</h2>
                  <ul className="list-disc list-inside text-xs leading-5">
                    <li>Digital Marketing</li>
                    <li>Market Analysis</li>
                    <li>Social Media Management</li>
                    <li>Public Speaking</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-bold text-sm mb-1">Contact</h2>
                  <ul className="text-xs leading-5">
                    <li className="flex items-center gap-2">
                      <MdCall />
                      <span>+1 234-567-890</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <IoIosMail />
                      <span>abc@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaHome />
                      <span>Anywhere Street, New York</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </footer>
          </main>
        </aside>
      </article>
    </section>
  );
};

export default FreeImgTemplate1;
