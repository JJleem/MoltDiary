import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full py-6 flex justify-center items-center">
      <div className="w-[1440px] flex justify-between items-center">
        <Link href="/" className="text-2xl">
          Molt.
        </Link>
        <div className="border border-AlmondPeach h-full px-3 py-1 flex justify-center items-center gap-1.5 text-sm cursor-pointer">
          <span className="w-6 h-6 rounded-full bg-NauticalBlue"></span>
          Molt
        </div>
      </div>
    </div>
  );
};

export default Header;
