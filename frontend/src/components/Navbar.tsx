import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-end">
      <Link href="/" className="md:text-4xl sm:text-3xl text-2xl">
        CodeNexus
      </Link>
      <div className="flex md:gap-8 gap-4">
        <Link
          href="/"
          className="md:text-md text-sm hover:text-purple-400 pb-1 border-b-2 border-transparent hover:border-purple-400 transition-all ease-in-out duration-300"
        >
          Home{" "}
        </Link>
        <Link
          href="/all-code"
          className="md:text-md text-sm hover:text-purple-400 pb-1 border-b-2 border-transparent hover:border-purple-400 transition-all ease-in-out duration-300"
        >
          All Codes
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
