/* eslint-disable prefer-const */
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./GithubGrassStyle.css";

// startDate부터 endDate까지의 모든 날짜를 생성
const generateDateRange = (startDate: Date, endDate: Date) => {
  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
};

const GithubGrass = () => {
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  // 실제 데이터 (여기에 없는 날짜는 count 0으로 표시)
  const commitValues = [
    { date: "2024-10-20", count: 1 },
    { date: "2024-10-21", count: 3 },
    { date: "2024-10-19", count: 2 },
    { date: "2024-10-17", count: 1 },
    { date: "2024-10-14", count: 2 },
    { date: "2024-10-13", count: 4 },
    { date: "2024-10-10", count: 3 },
    { date: "2024-10-06", count: 2 },
    { date: "2024-10-22", count: 4 },
    // 더 많은 데이터...
  ];

  // 모든 날짜에 대해 `values` 생성
  const allDates = generateDateRange(startDate, endDate).map((date) => {
    const formattedDate = date.toISOString().split("T")[0];
    const commit = commitValues.find((val) => val.date === formattedDate);
    return { date: formattedDate, count: commit ? commit.count : 0 };
  });

  return (
    <div className="w-full flex flex-col gap-4">
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={allDates}
        classForValue={(value) => {
          if (!value || value.count === 0) return "color-empty";
          return `color-scale-${value.count}`;
        }}
        titleForValue={(value) =>
          value ? `${value.date} : ${value.count} commits` : "No data"
        }
      />
      <div className="w-full flex justify-end gap-1 items-center">
        <div className="">Less</div>
        <div className="w-[16px] h-[16px]  bg-AlmondPeach"></div>
        <div className="w-[16px] h-[16px]  bg-Bermuda"></div>
        <div className="w-[16px] h-[16px] bg-Baltic"></div>
        <div className="w-[16px] h-[16px] bg-LittleBoyBlue"></div>
        <div className="w-[16px] h-[16px] bg-NauticalBlue"></div>
        <div>More</div>
      </div>
    </div>
  );
};

export default GithubGrass;
