"use client";
import App from "@/components/App";
import { EditorProvider } from "@/context/EditorContext";

export default function Home() {
  return (
    <EditorProvider>
      <App />
    </EditorProvider>
  );
}
