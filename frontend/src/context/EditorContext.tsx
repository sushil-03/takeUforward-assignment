import { createContext, useContext, useState } from "react";
type EditorContextType = {
  language: string;
  standard_input: string;
  setLangauage: (val: string) => void;
  setStandartInput: (input: string) => void;
  code: string;
  setCode: (val: string) => void;
};

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLangauage] = useState<string>("c++");
  const [standard_input, setStandartInput] = useState<string>("");
  const [code, setCode] = useState<string>("");

  return (
    <EditorContext.Provider
      value={{
        language,
        standard_input,
        code,
        setLangauage,
        setCode,
        setStandartInput,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
// Custom hook
export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};
