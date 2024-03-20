"use client";
import CodeEditor from "@/components/CodeEditor";
import { useEditorContext } from "@/context/EditorContext";
import { useState, MouseEvent } from "react";
import addCode from "@/hooks/addCode";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [userName, setUserName] = useState("");
  const { language, code, standard_input } = useEditorContext();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      username: userName,
      standard_input,
      code,
      language,
    };
    const response = await addCode(data);
    if (response.status == 200) {
      toast.success("Code added ");
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="mt-8">
      <div className=" flex items-center justify-center lg:my-32 md:my-28 sm:my-14 my-10 lg:w-1/2 md:w-2/3 sm:w-3/4 w-5/6 mx-auto ">
        <p className="text-center">
          <span className="md:text-xl sm:text-lg text-md font-medium font-mono">
            Code Hosting Hub
          </span>
          <br />
          <span className="md:text-2xl sm:text-xl text-lg font-medium font-mono">
            Streamlining Collaboration Online
          </span>
        </p>
      </div>
      <form className="flex md:gap-10 gap-4">
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className=" w-full py-4 px-3 rounded-md bg-[#1e1e1e] outline-none text-sm focus:border-purple-400 border-2 border-transparent"
          required
          placeholder="username"
        />

        <button
          className="bg-purple-800 hover:bg-purple-700 transition-color ease-in-out duration-300 px-4  rounded-md"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
      <CodeEditor />
      <Toaster position="bottom-center" />
    </div>
  );
}
