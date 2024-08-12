import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../component/common/header/Header";
import Footer from "../../component/common/footer/Footer";
import Main from "../Main/Main";
import {
  ArrowPeach,
  HomeContainer,
  HomeContentSection,
  HomeContentTitle,
  HomeInner,
  HomeProfile,
  HomeProfileSection,
  HomeProfileTitle,
  ProfileBtnSection,
  TypeSection,
  TypeSectionTagUl,
  TypeSectionUl,
} from "./StyleHome";
import { useState } from "react";
import HomeCalendar from "../../component/calendar/HomeCalendar";
const Home = () => {
  const [arrowClick, setArrowClick] = useState(false);
  const handleClick = () => {
    setArrowClick(!arrowClick);
  };
  const [arrowTagClick, setArrowTagClick] = useState(false);
  const handleTagClick = () => {
    setArrowTagClick(!arrowTagClick);
  };
  return (
    <HomeContainer>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
      <HomeInner>
        <HomeContentSection>
          <HomeContentTitle>
            <div>
              전체 게시글 <span>123123</span>
            </div>

            <form action="GET">
              <input type="text" placeholder="Search..." maxLength={14} />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_51_89"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_51_89)">
                  <path d="M19.6667 21L15.5079 16.873C14.873 17.4021 14.1429 17.8148 13.3175 18.1111C12.4921 18.4074 11.6455 18.5556 10.7778 18.5556C8.59788 18.5556 6.75661 17.8042 5.25397 16.3016C3.75132 14.7989 3 12.9577 3 10.7778C3 8.61905 3.75132 6.78286 5.25397 5.26921C6.75661 3.7564 8.59788 3 10.7778 3C12.9365 3 14.7672 3.75132 16.2698 5.25397C17.7725 6.75661 18.5238 8.59788 18.5238 10.7778C18.5238 11.6878 18.3757 12.5556 18.0794 13.381C17.7831 14.2063 17.381 14.9259 16.873 15.5397L21 19.6667L19.6667 21ZM10.7778 16.6508C12.4074 16.6508 13.7886 16.0794 14.9213 14.9365C16.0531 13.7936 16.619 12.4074 16.619 10.7778C16.619 9.14815 16.0531 7.7619 14.9213 6.61905C13.7886 5.47619 12.4074 4.90476 10.7778 4.90476C9.12698 4.90476 7.73566 5.47619 6.60381 6.61905C5.47111 7.7619 4.90476 9.14815 4.90476 10.7778C4.90476 12.4074 5.47111 13.7936 6.60381 14.9365C7.73566 16.0794 9.12698 16.6508 10.7778 16.6508Z" />
                </g>
              </svg>
            </form>
          </HomeContentTitle>
        </HomeContentSection>
        <HomeProfileSection>
          <HomeProfileTitle>
            <HomeProfile>
              <i></i>
              <div></div>
              <span>Molt Diary</span>
              <p>Molt Diary Molt Diary Molt Diary</p>
            </HomeProfile>
            <ProfileBtnSection>
              <div>글쓰기</div>
              <div>블로그 관리</div>
            </ProfileBtnSection>
          </HomeProfileTitle>
          <TypeSection>
            <div>
              <div>
                분류 전체보기 <span>(24)</span>
              </div>
              <ArrowPeach
                onClick={handleClick}
                arrowClick={arrowClick}
              ></ArrowPeach>
            </div>
            <TypeSectionUl arrowClick={arrowClick}>
              <li>가나다라마바사</li>
              <li>아자차카타파하</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>가나다라마바사</li>
              <li>아자차카타파하</li>
              <li>abcd</li>
              <li>efgh</li>
            </TypeSectionUl>
          </TypeSection>
          <TypeSection>
            <div>
              <div>
                태그 전체보기 <span>(52)</span>
              </div>
              <ArrowPeach
                onClick={handleTagClick}
                arrowClick={arrowTagClick}
              ></ArrowPeach>
            </div>
            <TypeSectionTagUl arrowClick={arrowTagClick}>
              <li>가나다라마바사</li>
              <li>아자차카타파하</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>가나다라마바사</li>
              <li>아자차카타파하</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
              <li>abcd</li>
              <li>efgh</li>
            </TypeSectionTagUl>
          </TypeSection>
          <HomeCalendar />
        </HomeProfileSection>
      </HomeInner>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
