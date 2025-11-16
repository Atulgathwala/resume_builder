import React, { useRef } from "react";
import FreeImgTemplate1 from "../../../../Templates/Free/FreeImgTemplate1";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TemplateEditorMainComponent = () => {
  const templateRef = useRef();

  const downloadPDF = async () => {
    const element = templateRef.current;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    // Fit content to A4 width
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = {
      width: pdfWidth,
      height: (canvas.height * pdfWidth) / canvas.width,
    };

    pdf.addImage(imgData, "PNG", 0, 0, imgProps.width, imgProps.height);
    pdf.save("Resume.pdf");
  };

  return (
    <section className="h-[120vh] w-[100vw]  bg-[#eee] flex justify-center flex-col items-center gap-4">
      {/* This ref captures ONLY the template */}
      <div
        contentEditable="true"
        className="w-[100%] h-[100vh] flex justify-center items-center gap-4 flex-col border"
        ref={templateRef}
      >
        <FreeImgTemplate1 />
      </div>
      <button
        onClick={downloadPDF}
        className="bg-blue-600 text-white px-8 py-1 rounded-md font-semibold"
      >
        Download
      </button>
    </section>
  );
};

export default TemplateEditorMainComponent;
