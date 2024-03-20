import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import SampleInput from "./SampleInput";
import { useEditorContext } from "@/context/EditorContext";

const CodeEditor = () => {
  const editorRef = useRef();
  const { language, setCode, code, setStandartInput, standard_input } =
    useEditorContext();

  function handleEditorChange(value: string | undefined, event: any) {
    setCode(value || "");
  }

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className=" mt-8 flex  lg:flex-row flex-col gap-10 ">
      <div className="lg:w-4/6 w-full flex flex-col items-end">
        <LanguageSelector />
        <Editor
          onMount={onMount}
          value={code}
          language={language}
          height="70vh"
          theme="vs-dark"
          onChange={handleEditorChange}
          className="w-full "
        />
      </div>
      <SampleInput
        setStandartInput={setStandartInput}
        standard_input={standard_input}
      />
    </div>
  );
};

export default CodeEditor;
