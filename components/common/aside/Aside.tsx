import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileSection from "../profile/ProfileSection";
import { asideToggle } from "@/store/toggleSlice";

const Aside = () => {
  const isToggled = useSelector(
    (state: RootState) => state.asideToggle.isToggled
  );
  const dispatch = useDispatch();
  const handleClickToggle = () => {
    dispatch(asideToggle());
  };
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    if (isToggled) {
      // 트랜지션이 끝난 후 배경을 표시
      setTimeout(() => setShowBackground(true), 0); // 500ms는 duration-500과 일치
    } else {
      setTimeout(() => setShowBackground(false), 200);
    }
  }, [isToggled]);
  return (
    <div
      className={`sm:hidden w-full h-full absolute z-50  ${
        showBackground ? "bg-opacity-30 bg-black z-50" : "-z-50 "
      } ${isToggled ? "" : "z-50"}`}
      onClick={handleClickToggle}
    >
      <div
        className={`sm:hidden w-[80%] h-full    px-8 flex absolute bg-white  z-52 transition-right duration-500 ${
          isToggled ? "right-0" : "-right-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ProfileSection className="xxs:flex w-full gap-10" />
      </div>
    </div>
  );
};

export default Aside;
