import React, { ChangeEvent } from "react";
import { LANGUAGE_VERSIONS, CODE_SNIPPETS } from "@/constant";
import { useEditorContext } from "@/context/EditorContext";

const LanguageSelector = () => {
  const { language, setLangauage, setCode } = useEditorContext();
  const languages = Object.entries(LANGUAGE_VERSIONS);

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const currLang = e.target.value;
    setLangauage(currLang);
    const codeSnippet = CODE_SNIPPETS[currLang];
    if (currLang in CODE_SNIPPETS) {
      setCode(codeSnippet);
    }
  };
  return (
    <div className="my-3 ">
      <div>
        <select
          name=""
          id=""
          className="bg-[#1e1e1e] px-3 py-1 outline-none"
          defaultValue={language}
          onChange={(e) => handleChangeLanguage(e)}
        >
          {languages.map((lang, index) => {
            return (
              <option value={lang[0]} key={index} className="px-3  capitalize">
                {lang[0]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
