"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"; // 커스터마이징된 CSS 파일 import
import moment from "moment";
import { useDispatch } from "react-redux";
import { setDate } from "@/store/daySlice";

interface HomeCalendarProps {
  className?: string;
}

const HomeCalendar: React.FC<HomeCalendarProps> = ({ className }) => {
  const [value, setValue] = useState<Date | null | [Date | null, Date | null]>(
    null
  );

  const dispatch = useDispatch();

  // 날짜가 변경될 때마다 Redux 상태 업데이트
  const handleChange = (newValue: Date | null | [Date | null, Date | null]) => {
    setValue(newValue);

    if (Array.isArray(newValue)) {
      // 날짜 범위가 선택된 경우
      const formattedDateRange = `${
        newValue[0] ? moment(newValue[0]).format("YYYY년 MM월 DD일") : "N/A"
      } - ${
        newValue[1] ? moment(newValue[1]).format("YYYY년 MM월 DD일") : "N/A"
      }`;
      dispatch(setDate(formattedDateRange));
    } else if (newValue) {
      // 단일 날짜가 선택된 경우
      const formattedDate = moment(newValue).format("YYYY년 MM월 DD일");
      dispatch(setDate(formattedDate));
    } else {
      // 날짜가 선택되지 않은 경우
      dispatch(setDate(""));
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 초기 상태 설정
    dispatch(setDate(""));
  }, [dispatch]);

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
