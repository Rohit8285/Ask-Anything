import React, { useContext } from "react";
// import { FaUserCircle } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context.jsx";
import { FaCircleUser } from "react-icons/fa6";
import geminiLogo from "../assets/geminiLogo.png";
import Askanything from "../assets/askanything-logo.png";

const MainContent = () => {
  const {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className=" flex items-center justify-between text-xl p-5 text-slate-700">
        <p className="capitalize text-[32px] font-sans pb-3 bg-gradient-to-r from-[#46b083] to-[#09560c] bg-clip-text text-transparent">
          Ask Anything
        </p>
        {/* <FaUserCircle className="text-3xl" /> */}
        <img
          src={Askanything}
          alt="askanything-logo"
          className="w-20 rounded-[50%]"
        />
      </div>

      <div className="max-w-[900px] mx-auto capitalize">
        {!showResult ? (
          <>
            <div className="my-6 text-[56px] text-slate-500 font-semibold p-5">
              <p>
                <span className="capitalize bg-gradient-to-r from-[#7691f3] to-[#85fb78] bg-clip-text text-transparent">
                  hello, abhishek.
                </span>
              </p>
              <p className="text-slate-500">how can i help you today?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
              <div className="h-[200px]  p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg capitalize">
                  Suggest Me Best Coding Language in 2024 ?
                </p>
                <GiCompass className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
              <div className="h-[200px]  p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg capitalize">
                  what is loop in javascripts. How many types in Loop in
                  Javascript ?
                </p>
                <FaLightbulb className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
              <div className="h-[200px]  p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg capitalize">
                  what is Difference Between Angular And NextJS ?
                </p>
                <MdOutlineMessage className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
              <div className="h-[200px]  p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg capitalize">
                  Who is World Top ERP Software Company in the India ?
                </p>
                <FaCode className="text-4xl p-1 absolute bottom-2 right-2" />
              </div>
            </div>
          </>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
            <div className="my-10 mx-0 flex items-center gap-5">
              <FaCircleUser className="text-3xl" />

              <p className=" text-lg font-[400] leading-[1.8]">
                {recentPrompt}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <img
                src={Askanything}
                alt="askanything"
                className="w-10 rounded-[50%]"
              />
              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  <hr className="rounded-md border-none bg-gray-400 bg-gradient-to-r from-[#81ffc4] via-[#a2abfd] to-[#82e978] p-4 animate-scroll-bg"></hr>
                  <hr className="rounded-md border-none bg-gray-400 bg-gradient-to-r from-[#81ffc4] via-[#a2abfd] to-[#82e978] p-4 animate-scroll-bg"></hr>
                  <hr className="rounded-md border-none bg-gray-400 bg-gradient-to-r from-[#81ffc4] via-[#a2abfd] to-[#82e978] p-4 animate-scroll-bg"></hr>
                  <hr className="rounded-md border-none bg-gray-400 bg-gradient-to-r from-[#81ffc4] via-[#a2abfd] to-[#82e978] p-4 animate-scroll-bg"></hr>
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className=" text-lg font-[400] leading-[1.8]">
                  {/* {resultData} */}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
          <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
            <input
              type="text"
              placeholder="Enter your Prompt Here..."
              className="
            flex-1 bg-transparent border-none outline-none p-2 text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex gap-4 items-center">
              {/* <IoMdPhotos className="text-2xl cursor-pointer" />
              <FaMicrophone className="text-2xl cursor-pointer" /> */}
              {input && (
                <IoMdSend
                  onClick={() => onSent()}
                  className="text-2xl cursor-pointer"
                />
              )}
            </div>
          </div>

          <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">
            <span className="bg-gradient-to-r from-[#04068d] to-[#870404] bg-clip-text text-transparent">
              AskAnything
            </span>
            some times may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
