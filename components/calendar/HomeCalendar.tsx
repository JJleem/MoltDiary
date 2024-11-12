"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"; // 커스터마이징된 CSS 파일 import
import moment from "moment";

interface HomeCalendarProps {
  className?: string;
}

const HomeCalendar: React.FC<HomeCalendarProps> = ({ className }) => {
  const [value, setValue] = useState<Date | null | [Date | null, Date | null]>(
    null
  );

  const handleChange = (newValue: Date | null | [Date | null, Date | null]) => {
    setValue(newValue);
  };

  return (
    <div
      className={`w-full flex flex-col items-center z-10 md:flex ${className}`}
    >
      <Calendar
        onChange={handleChange}
        value={value}
        showNeighboringMonth={false}
        minDetail="month"
        maxDetail="month"
        locale="ko"
        formatDay={(locale, date) => moment(date).format("DD")}
        className="react-calendar"
      />
      <div className="mt-4 text-black border-red-500">
        {Array.isArray(value)
          ? `선택한 날짜 범위: ${
              value[0] ? moment(value[0]).format("YYYY년 MM월 DD일") : "N/A"
            } - ${
              value[1] ? moment(value[1]).format("YYYY년 MM월 DD일") : "N/A"
            }`
          : value
          ? `선택한 날짜: ${moment(value).format("YYYY년 MM월 DD일")}`
          : "날짜를 선택하세요."}
      </div>
    </div>
  );
};

export default HomeCalendar;
