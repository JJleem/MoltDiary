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
            전체 게시글 <span>123123</span>
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
