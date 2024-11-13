import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { asideToggle } from "@/store/toggleSlice";

const Header = () => {
  const isToggled = useSelector(
    (state: RootState) => state.asideToggle.isToggled
  );

  const dispatch = useDispatch();
  const handleClickToggle = () => {
    dispatch(asideToggle());
  };

  const svgPath = isToggled
    ? "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
    : "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z";

  return (
    <div className="w-full py-6 flex justify-center items-center 2xl:pl-[240px] 2xl:pr-[240px] xl:pl-[160px] xl:pr-[160px]  lg:pl-[120px] lg:pr-[120px] xxs:pl-[24px] xxs:pr-[24px]">
      <div className="w-[1440px] flex justify-between items-center">
        <Link href="/" className="text-2xl">
          Molt.
        </Link>
        <div className="flex justify-center items-center gap-3">
          <div className="border border-AlmondPeach h-full px-3 py-1 flex justify-center items-center gap-1.5 text-sm cursor-pointer">
            <span className="w-6 h-6 rounded-full bg-NauticalBlue"></span>
            Molt
          </div>
          <svg
            className="cursor-pointer transition-colors duration-300 hover:fill-Almondine sm:hidden"
            onClick={handleClickToggle}
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#D8C8BD"
          >
            <path d={svgPath} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
