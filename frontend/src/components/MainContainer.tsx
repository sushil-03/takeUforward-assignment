import React from "react";
import Navbar from "./Navbar";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-black text-white md:px-20 sm:px-10 px-5 md:py-10 py-5 min-h-screen">
      <Navbar />
      {children}
    </main>
  );
};

export default MainContainer;
