import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import ProfileSection from "../profile/ProfileSection";

const Aside = () => {
  const isToggled = useSelector(
    (state: RootState) => state.asideToggle.isToggled
  );
  console.log("asidetoggle", isToggled);

  return (
    <div
      className={`sm:hidden w-[80%] h-full  bg-white border border-red-500  px-8 flex  absolute z-50 transition-all duration-500 ${
        isToggled ? "right-0" : "-right-full"
      }`}
    >
      <ProfileSection className="xxs:flex w-full gap-10" />
    </div>
  );
};

export default Aside;
