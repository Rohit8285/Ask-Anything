import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);

    await onSent(prompt);
  };

  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#e4e7eb] py-[25px] px-[15px]">
      <div>
        <IoMenu
          onClick={() => setExtended(!extended)}
          className="text-2xl block cursor-pointer"
        />

        <div
          onClick={() => newChat()}
          className="mt-[30px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text=[14px] text-gray-500 cursor-pointer bg-gray-300 rounded-full">
          <FaPlus className="text-2xl" />

          {extended && <p className="capitalize">new chat</p>}
        </div>

        {extended && (
          <div className="flex flex-col animate-fadeIn duration-1000">
            <p className="capitalize mt-7 mb-5">recent</p>
            {prevPrompt?.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-gray-300">
                  <MdOutlineMessage className="text-2xl" />
                  <p className="capitalize">{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-slate-300">
          <FaRegQuestionCircle className="text-2xl" />
          {extended && <p className="capitalize">help</p>}
        </div>

        <div className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-slate-300">
          <GrHistory className="text-2xl" />
          {extended && <p className="capitalize">Activity</p>}
        </div>

        <div className="flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-slate-300">
          <IoSettingsOutline className="text-2xl" />
          {extended && <p className="capitalize">Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
