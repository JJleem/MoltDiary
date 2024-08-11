import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { CalendarContainer } from "./StyleCalendar";
const HomeCalendar = () => {
  const [value, setValue] = useState<Date | null | [Date | null, Date | null]>(
    new Date()
  );

  const handleChange = (newValue: Date | null | [Date | null, Date | null]) => {
    setValue(newValue);
  };

  return (
    <CalendarContainer>
      <Calendar
        onChange={handleChange}
        value={value}
        showNeighboringMonth={false}
        minDetail="month"
        maxDetail="month"
        formatDay={(locale, date) => moment(date).format("DD")}
      />
      <div className="text-black-500 mt-4">
        {Array.isArray(value)
          ? `선택한 날짜 범위: ${moment(value[0]).format(
              "YYYY년 MM월 DD일"
            )} - ${moment(value[1]).format("YYYY년 MM월 DD일")}`
          : value
          ? `선택한 날짜: ${moment(value).format("YYYY년 MM월 DD일")}`
          : "날짜를 선택하세요."}
      </div>
    </CalendarContainer>
  );
};

export default HomeCalendar;
