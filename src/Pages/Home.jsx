import React, { useContext } from "react";
import heroImg from "../Assets/Images/heroImage.png"; // 🖼️ replace with your image path

import toast from "react-hot-toast";
import FreeImgTemplate1 from "../Templates/Free/FreeImgTemplate1";
import FreeTextTemplate2 from "../Templates/Free/FreeTextTemplate2";
import PaidImgTemplate3 from "../Templates/Paid/PaidImgTemplate3";
import PaidTextTemplate4 from "../Templates/Paid/PaidTextTemplate4";
import { USERCONTEXTAPI } from "../Context/UserContext";
import MainPortal from "../Portals/MainPortal";
import { TemplateContextAPI } from "../Context/TemplateContext";

const HeroSection = () => {
  let { all_Templates } = useContext(TemplateContextAPI);
  return (
    <>
      <section className=" flex flex-col md:flex-row items-center justify-between px-8 md:px-16 h-[calc(100vh-70px)]  ">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Build Your{" "}
            <span className="text-blue-600">Professional Resume</span>{" "}
            Effortlessly
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Create an impressive resume in minutes with our easy-to-use builder.
            Choose templates, customize your details, and get hired faster.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 z-0 flex justify-center">
          <img
            src={heroImg}
            alt="Resume Builder"
            className="w-[350px]  md:w-[500px] drop-shadow-lg rounded-lg "
          />
        </div>
      </section>

      {/* ? Templates section starts from here */}

      <section className="h-[100vh] flex flex-wrap gap-3 justify-evenly ">
        {all_Templates?.map((temp, ind) => {
          return (
            <div key={ind}>
              <img
                src={temp?.thumbnail}
                alt=""
                className="h-[250px] w-[200px] cursor-pointer"
              />
            </div>
          );
        })}
      </section>

      <MainPortal>
        <section className="h-[85%] w-[70%] bg-white rounded-lg flex">
          <aside className="w-[50%] h-full  py-6 flex flex-col gap-6">
            <header className="text-center text-blue-600 text-[20px] font-semibold ">
              Edit Your Template here
            </header>
            <main className="w-full flex justify-center ">
              <img
                src="src\Assets\TemplatesThumbnail\FreeImgTempalte1.png"
                alt=""
                className="h-[500px]"
              />
            </main>
          </aside>
          <aside className="w-[50%] h-full py-6 text-center flex flex-col  items-center gap-4">
            {/* TEMPLATE TITLE */}
            <h2 className="text-2xl text-center font-semibold text-gray-800">
              Green Modern Business Analyst Resume
            </h2>
            {/* SIZE */}
            <p className="text-gray-500 mt-1 ">
              Resume (A4 Portrait) • 21 × 29.7 cm
            </p>
            {/* AUTHOR */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xl">✒️</span>
              </div>

              <div>
                <p className="text-gray-700 font-medium mb-1">
                  By Atul gathwala
                </p>
                <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
                  Follow
                </button>
              </div>
            </div>

            {/* FAVORITE + OPTIONS */}
            <div className="flex items-center gap-4">
              <a
                href="/edit_template"
                target="_blank"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg  w-[70%] flex items-center justify-center gap-2 cursor-pointer"
              >
                {/* <span>👑</span> */}
                Use this template
              </a>
              <button className="p-2 border rounded-md hover:bg-gray-100 text-xl">
                ⭐
              </button>
              <button className="p-2 border rounded-md hover:bg-gray-100 text-xl">
                ⋮
              </button>
            </div>

            {/* ? Paid data */}
            {/* NOTES */}
            {/* <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">💲</span>
                <p className="text-gray-600">
                  This template contains paid elements
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">👑</span>
                <p className="text-gray-600">
                  Unlock all templates from ₹69 for 1 day, or a 30-day free Pro
                  trial
                </p>
              </div>
            </div> */}

            {/* Paid elements ends here */}
          </aside>
        </section>
      </MainPortal>

      {/* ? Templates section Ends from here */}
    </>
  );
};

export default HeroSection;
