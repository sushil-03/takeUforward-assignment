"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Editor from "@monaco-editor/react";
import SampleInput from "./SampleInput";
import { CodeType } from "@/types.dt";

const ListCode = ({ code }: { code: CodeType }) => {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const getDateAndTime = (dateTime: Date) => {
    const timestamp = new Date(dateTime);
    const transformedTimeStamp =
      timestamp.getDate() +
      "/" +
      timestamp.getMonth() +
      "/" +
      timestamp.getFullYear() +
      " at " +
      timestamp.getHours() +
      ":" +
      timestamp.getMinutes() +
      ":" +
      timestamp.getSeconds();

    return transformedTimeStamp;
  };

  return (
    <div className="bg-neutral-900  py-5 px-10 mt-5 rounded-sm ">
      <div className=" grid md:grid-cols-6  sm:grid-cols-4 grid-cols-3 text-gray-400 ">
        <p className="sm:block hidden">{code.id}</p>
        <p className="">{code.username}</p>
        <p className="   md:col-span-2 md:block hidden text-center">
          {getDateAndTime(code.createdAt)}
        </p>
        <p className=" capitalize text-right">{code.language}</p>
        <button
          className="flex gap-10 items-right   justify-end"
          onClick={() => setShowCode(!showCode)}
        >
          <IoIosArrowDown
            size={24}
            className={`hover:text-slate-400 rota transition-all  ease-in-out duration-300   ${
              showCode ? "rotate-180" : " rotate-0"
            }`}
          />
        </button>
      </div>
      {showCode && (
        <div
          className={` w-full flex lg:flex-row flex-col lg:gap-10 gap-4  ${
            showCode ? "show-transition" : "hide-transition"
          }`}
        >
          <div
            className={`lg:w-4/6  ${
              seeMore ? " sm:h-[55vh]  h-[65vh]" : "sm:h-[30vh] h-[40vh]"
            }`}
          >
            <Editor
              value={!seeMore ? `${code.code.slice(0, 100)}` : code.code}
              language={code.language}
              theme="vs-dark"
              className="w-full mt-16"
              options={{
                readOnly: true,
              }}
            />
            {code.code.length > 100 && (
              <button
                onClick={() => setSeeMore(!seeMore)}
                className="text-sm text-gray-400"
              >
                {!seeMore ? "See More" : "See Less"}
              </button>
            )}
          </div>
          <SampleInput
            standard_input={code.standard_input}
            setStandartInput={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default ListCode;
