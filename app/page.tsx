"use client";

import HomeCalendar from "@/components/calendar/HomeCalendar";
import GithubGrass from "@/components/github/GithubGrass";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [arrowClick, setArrowClick] = useState(false);
  const [arrowTagClick, setArrowTagClick] = useState(false);

  const handleClick = () => {
    setArrowClick(!arrowClick);
  };

  const handleTagClick = () => {
    setArrowTagClick(!arrowTagClick);
  };

  return (
    <div className="w-full flex flex-col items-center gap-12 h-[200vh] ">
      <div className="flex w-[1440px] h-[2000px] gap-24">
        {/* Content Section */}
        <div className="w-[70%] flex flex-col gap-12 pt-9">
          <div className="w-full  ">
            <GithubGrass />
          </div>
          <div className="w-full flex gap-1.5 border-b border-AlmondPeach pb-3 justify-between items-center">
            <div className="flex items-center gap-1.5">
              <span>전체 게시글</span>{" "}
              <span className="text-PeachFuzz">123123</span>
            </div>
            <form className="relative">
              <input
                type="text"
                placeholder="Search..."
                maxLength={14}
                className="border border-AlmondPeach p-1.5 pr-10 focus:outline-PeachFuzz"
              />
              <svg
                width="24"
                height="24"
                className="absolute top-1/2 right-1.5 transform -translate-y-1/2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.6667 21L15.5079 16.873C14.873 17.4021 14.1429 17.8148 13.3175 18.1111C12.4921 18.4074 11.6455 18.5556 10.7778 18.5556C8.59788 18.5556 6.75661 17.8042 5.25397 16.3016C3.75132 14.7989 3 12.9577 3 10.7778C3 8.61905 3.75132 6.78286 5.25397 5.26921C6.75661 3.7564 8.59788 3 10.7778 3C12.9365 3 14.7672 3.75132 16.2698 5.25397C17.7725 6.75661 18.5238 8.59788 18.5238 10.7778C18.5238 11.6878 18.3757 12.5556 18.0794 13.381C17.7831 14.2063 17.381 14.9259 16.873 15.5397L21 19.6667L19.6667 21ZM10.7778 16.6508C12.4074 16.6508 13.7886 16.0794 14.9213 14.9365C16.0531 13.7936 16.619 12.4074 16.619 10.7778C16.619 9.14815 16.0531 7.7619 14.9213 6.61905C13.7886 5.47619 12.4074 4.90476 10.7778 4.90476C9.12698 4.90476 7.73566 5.47619 6.60381 6.61905C5.47111 7.7619 4.90476 9.14815 4.90476 10.7778C4.90476 12.4074 5.47111 13.7936 6.60381 14.9365C7.73566 16.0794 9.12698 16.6508 10.7778 16.6508Z" />
              </svg>
            </form>
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-[30%] pt-9 flex flex-col gap-12">
          <div className="w-full border border-AlmondPeach h-[400px] flex flex-col justify-between items-center py-9 gap-3 relative">
            <div className="w-full flex flex-col justify-center items-center gap-6">
              <i className="absolute top-3 right-3 w-4 h-4 bg-[url('../assets/icon/settings.png')] bg-center bg-contain cursor-pointer"></i>
              <div className="w-[200px] h-[200px] bg-NauticalBlue rounded-full"></div>
              <span className="text-AlmondPeach">Molt Diary</span>
              <p className="text-sm text-AlmondPeach">
                Molt Diary Molt Diary Molt Diary
              </p>
            </div>
            <div className="w-full flex justify-center items-center gap-3">
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

          <div className="w-full border-b border-AlmondPeach">
            <div className="pb-1.5 flex justify-between">
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

          <div className="w-full border-b border-AlmondPeach">
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

          <HomeCalendar />
        </div>
      </div>
    </div>
  );
}
