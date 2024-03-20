import { SampleInputTypes } from "@/types.dt";
import React from "react";

const SampleInput = ({
  standard_input,
  setStandartInput,
}: SampleInputTypes) => {
  return (
    <div className="flex flex-col mt-10">
      Standard input
      <textarea
        name="sample input"
        id=""
        onChange={(e) => setStandartInput(e.target.value)}
        placeholder="sample input "
        value={standard_input}
        className=" bg-[#1e1e1e] outline-none border-2 border-transparent  focus:border-purple-600 p-4 rounded-md md:col-96   sm:w-[300px] w-[250px]   h-80"
      ></textarea>
    </div>
  );
};

export default SampleInput;
