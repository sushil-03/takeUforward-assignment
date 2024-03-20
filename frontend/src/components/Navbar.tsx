import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-end">
      <Link href="/" className="text-4xl">
        CodeNexus
      </Link>
      <div className="flex gap-8">
        <Link
          href="/"
          className="text-md hover:text-purple-400 pb-1 border-b-2 border-transparent hover:border-purple-400 transition-all ease-in-out duration-300"
        >
          Home{" "}
        </Link>
        <Link
          href="/all-code"
          className="text-md hover:text-purple-400 pb-1 border-b-2 border-transparent hover:border-purple-400 transition-all ease-in-out duration-300"
        >
          All Codes
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
