"use client";

import Aside from "@/components/common/aside/Aside";
import ProfileSection from "@/components/common/profile/ProfileSection";
import GithubGrass from "@/components/github/GithubGrass";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function Home() {
  const date = useSelector((state: RootState) => state.setDate.date);

  return (
    <div className="w-full flex flex-col items-center gap-12 2xl:pl-[240px] 2xl:pr-[240px] xl:pl-[160px] xl:pr-[160px] pb-[150px] lg:pl-[120px] lg:pr-[120px] xxs:pl-[24px] xxs:pr-[24px] overflow-x-hidden relative">
      <Aside />
      <div className="flex w-full  md:gap-24 xs:gap-0 xs:flex-col-reverse md:flex-row   justify-between">
        {/* Content Section */}
        <div className="w-[70%] flex flex-col gap-12 pt-9 xxs:w-full  md:w-[70%]  ">
          <div className="  w-full sm:flex justify-center items-center   xxs:overflow-x-scroll sm:overflow-auto">
            <GithubGrass />
          </div>
          <div className="w-[100%] flex gap-1.5 border-b border-AlmondPeach pb-3 justify-between items-center">
            <div className="flex items-center gap-1.5 w-full">
              <span>전체 게시글</span>
              <span className="text-PeachFuzz ">999</span>
            </div>
            <form className="relative">
              <input
                type="text"
                placeholder="Search..."
                maxLength={14}
                className="xxs:w-40 xs:w-60 sm:w-auto border border-AlmondPeach p-1.5 pr-10 focus:outline-PeachFuzz"
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
          <div className="w-full border border-red-500 h-[100vh]">{date}</div>
        </div>

        {/* Profile Section */}
        <ProfileSection className="xxs:hidden w-[30%] xs:flex-row" />
      </div>
    </div>
  );
}
