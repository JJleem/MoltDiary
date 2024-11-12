import React from "react";
import HomeCalendar from "../calendar/HomeCalendar";

const CalendarIcon = () => {
  return (
    <div className=" z-10 xs:hidden sm:flex md:hidden absolute right-0 bottom-0 border border-red-500 p-8 bg-white">
      <HomeCalendar />
    </div>
  );
};

export default CalendarIcon;
