"use client";
import App from "@/components/App";
import MainContainer from "@/components/MainContainer";
import { EditorProvider } from "@/context/EditorContext";

export default function Home() {
  return (
    <EditorProvider>
      <App />
    </EditorProvider>
  );
}
