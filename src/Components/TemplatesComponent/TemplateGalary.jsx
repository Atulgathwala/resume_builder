import React from "react";

import PaidTextTemplate3 from "./ImageTemplates/Paid/PaidTextTemplate3";
import FreeTextTemplate2 from "./ImageTemplates/Free/FreeTextTemplate2";
import PaidImgTemplate4 from "./ImageTemplates/Paid/PaidImgTemplate4";
import FreeImgTemplate1 from "./ImageTemplates/Free/FreeImgTemplate1";

const TemplateGalary = () => {
  const Alltemplates = [
    { id: 1, name: "name1", component: <FreeImgTemplate1 /> },
    { id: 2, name: "name2", component: <FreeTextTemplate2 /> },
    { id: 3, name: "name3", component: <PaidImgTemplate4 /> },
    { id: 4, name: "name4", component: <PaidTextTemplate3 /> },
  ];

  return (
    <section className="p-6">
      <header className="mb-6">
        <h1 className="text-[24px] font-semibold text-blue-600">
          Select Template
        </h1>
      </header>

      <main className="grid grid-cols-4 gap-6">
        {Alltemplates.map((temp) => (
          <div
            key={temp.id}
            className="w-[200px] h-[250px] bg-white rounded-lg shadow-md overflow-hidden border hover:scale-105 transition-all duration-200"
          >
            <div className="w-full h-full overflow-hidden">
              {/* Make the content fit */}
              <div className="scale-[0.25] origin-top-left">
                {temp.component}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default TemplateGalary;
