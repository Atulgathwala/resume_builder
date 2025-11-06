import React, { useState } from "react";
import FormBlock from "../../../Utilities/FormBlock";

const UserProfileUpdate = () => {
  const [currentStep, setCurrentStep] = useState(1);

  let initialProfileState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isSubscribe: false,
    address: {
      city: "",
      state: "",
      country: "",
      completeAddress: "",
    },
    contact: "",
    dob: "",
    gender: "",
    resume: {
      linkedIn: "",
      gitHub: "",
      profile: "",
      experience: [],
      projects: [],
      certificates: [],
      education: {
        degree: "",
        secondary: "",
        primary: "",
        diploma: "",
      },
      skills: [],
      hobbies: [],
      achievements: [],
    },
    oath: "",
  };

  // Handler for pagination
  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  return (
    <section className="w-full flex justify-center">
      <article className="h-auto w-[60%] bg-white rounded-lg py-4 px-5">
        <header>
          <h1 className="text-center text-[24px] font-semibold">
            {currentStep === 1 ? "Personal Info" : "Education Details"}
          </h1>
          <div className="h-[2px] bg-blue-600 my-4"></div>
        </header>

        <main>
          <form className="flex flex-wrap justify-between gap-4">
            {/* Step 1 — Personal Info */}
            {currentStep === 1 && (
              <>
                <FormBlock
                  name={"username"}
                  label={"Name"}
                  type={"text"}
                  placeholder={"Enter name "}
                />
                <FormBlock
                  name={"email"}
                  label={"Email"}
                  type={"email"}
                  placeholder={"Enter email "}
                />
                <FormBlock
                  name={"contact"}
                  label={"Contact no."}
                  type={"tel"}
                  placeholder={"Enter mobile number "}
                />
                <FormBlock
                  name={"dob"}
                  label={"Dob"}
                  type={"date"}
                  placeholder={"Enter dob "}
                />

                {/* Gender */}
                <div className=" w-[48%] flex flex-col gap-1.5 ">
                  <label>Gender</label>
                  <div className="flex items-center gap-3 border-2 border-[#e6e4e4] px-2 py-1.5 rounded-md">
                    <span className="flex gap-1">
                      Male <input type="radio" name="gender" />
                    </span>
                    <span className="flex gap-1">
                      Female <input type="radio" name="gender" />
                    </span>
                    <span className="flex gap-1">
                      Other <input type="radio" name="gender" />
                    </span>
                  </div>
                </div>

                <FormBlock
                  name={"country"}
                  label={"Country"}
                  type={"text"}
                  placeholder={"Enter country "}
                />
                <FormBlock
                  name={"state"}
                  label={"State"}
                  type={"text"}
                  placeholder={"Enter state "}
                />
                <FormBlock
                  name={"city"}
                  label={"City"}
                  type={"text"}
                  placeholder={"Enter city "}
                />

                <div className="w-full  flex flex-col gap-1">
                  <label>Complete Address</label>
                  <textarea className="border-2 border-[#e1d9d9] h-[60px] rounded-md resize-none outline-none py-1.5 px-2"></textarea>
                </div>
              </>
            )}

            {/* Step 2 — Education Details */}
            {currentStep === 2 && (
              <>
                <FormBlock
                  name={"degree"}
                  label={"Highest Degree"}
                  type={"text"}
                  placeholder={"Enter degree "}
                />
                <FormBlock
                  name={"secondary"}
                  label={"Secondary Education"}
                  type={"text"}
                  placeholder={"Enter school name "}
                />
                <FormBlock
                  name={"primary"}
                  label={"Primary Education"}
                  type={"text"}
                  placeholder={"Enter school name "}
                />
                <FormBlock
                  name={"diploma"}
                  label={"Diploma (if any)"}
                  type={"text"}
                  placeholder={"Enter diploma "}
                />
              </>
            )}
          </form>
        </main>

        {/* Pagination Buttons */}
        <footer className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Back
            </button>
          )}

          {currentStep < 2 && (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-md ml-auto"
            >
              Next
            </button>
          )}

          {currentStep === 2 && (
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md ml-auto"
            >
              Submit
            </button>
          )}
        </footer>
      </article>
    </section>
  );
};

export default UserProfileUpdate;
