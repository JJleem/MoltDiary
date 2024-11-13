/* eslint-disable @typescript-eslint/no-unused-vars */
import HomeCalendar from "@/components/calendar/HomeCalendar";
import CalendarIcon from "@/components/calendarIcon/CalendarIcon";
import Link from "next/link";
import React, { useState } from "react";

interface ProfileSectionProps {
  className?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ className }) => {
  const [arrowClick, setArrowClick] = useState(false);
  const [arrowTagClick, setArrowTagClick] = useState(false);

  const handleClick = () => {
    setArrowClick(!arrowClick);
  };

  const handleTagClick = () => {
    setArrowTagClick(!arrowTagClick);
  };

  return (
    <div
      className={`pt-9 flex flex-col gap-12 relative  sm:w-full md:w-[20%] md:flex-col ${className}  sm:flex `}
    >
      <CalendarIcon />
      <div className="w-full border border-AlmondPeach h-[400px] flex flex-col justify-between items-center py-9 gap-3 relative md:pl-4 md:pr-4 xs:pl-5 xs:pr-5">
        <div className="w-full flex flex-col justify-center items-center gap-6 ">
          <i className="absolute top-3 right-3 w-4 h-4 bg-[url('../assets/icon/settings.png')] bg-center bg-contain cursor-pointer"></i>
          <div className="lg:w-[180px] lg:h-[180px] bg-NauticalBlue rounded-full sm:w-[100px] sm:h-[100px] xxs:w-[150px] xxs:h-[150px]"></div>
          <span className="text-AlmondPeach">Molt Diary</span>
          <p className="text-sm text-AlmondPeach">
            Molt Diary Molt Diary Molt Diary
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-3 ">
          <Link
            href="/post"
            className="w-[100px] bg-Baltic text-white text-sm rounded-md py-1 text-center cursor-pointer hover:bg-NauticalBlue"
          >
            글쓰기
          </Link>
          <div className="w-[100px] bg-LittleBoyBlue text-white text-sm rounded-md py-1 text-center cursor-pointer hover:bg-NauticalBlue">
            블로그 관리
          </div>
        </div>
      </div>
      <div className=" flex sm:flex sm:flex-col sm:w-full sm:items-center xs:flex-col xs:gap-10   sm:gap-[24px]">
        <div className="w-full border-b border-AlmondPeach ">
          <div className="pb-1.5 flex justify-between ">
            <div>
              분류 전체보기 <span className="text-PeachFuzz">(24)</span>
            </div>
            <p
              onClick={handleClick}
              className={`w-4 h-4 bg-[url('../assets/icon/arrow_peach.png')] bg-center bg-contain cursor-pointer transform ${
                arrowClick ? "rotate-180" : ""
              }`}
            ></p>
          </div>
          <ul
            className={`transition-all overflow-hidden ${
              arrowClick ? "h-auto py-3" : "h-0"
            }`}
          >
            <li className="list-disc text-AlmondPeach text-sm cursor-pointer hover:text-black">
              가나다라마바사
            </li>
            <li className="list-disc text-AlmondPeach text-sm cursor-pointer hover:text-black">
              아자차카타파하
            </li>
            <li className="list-disc text-AlmondPeach text-sm cursor-pointer hover:text-black">
              abcd
            </li>
            <li className="list-disc text-AlmondPeach text-sm cursor-pointer hover:text-black">
              efgh
            </li>
          </ul>
        </div>

        <div className="w-full border-b border-AlmondPeach ">
          <div className="pb-1.5 flex justify-between">
            <div>
              태그 전체보기 <span className="text-PeachFuzz">(52)</span>
            </div>
            <p
              onClick={handleTagClick}
              className={`w-4 h-4 bg-[url('../assets/icon/arrow_peach.png')] bg-center bg-contain cursor-pointer transform ${
                arrowTagClick ? "rotate-180" : ""
              }`}
            ></p>
          </div>
          <ul
            className={`grid grid-cols-3 gap-3 transition-all overflow-hidden ${
              arrowTagClick ? "h-auto py-3" : "h-0"
            }`}
          >
            <li className="text-AlmondPeach text-sm cursor-pointer hover:text-black">
              # 가나다라마바사
            </li>
            <li className="text-AlmondPeach text-sm cursor-pointer hover:text-black">
              # 아자차카타파하
            </li>
            <li className="text-AlmondPeach text-sm cursor-pointer hover:text-black">
              # abcd
            </li>
            <li className="text-AlmondPeach text-sm cursor-pointer hover:text-black">
              # efgh
            </li>
            {/* 태그 더 추가 */}
          </ul>
        </div>
      </div>

      <HomeCalendar className="sm:hidden" />
    </div>
  );
};

export default ProfileSection;
