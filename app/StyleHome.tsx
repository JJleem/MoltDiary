// import styled, { css } from "styled-components";
// import arrow_peach from "../assets/icon/arrow_Peach.png";
// import setting from "../assets/icon/settings.png";

// type clickProps = {
//   $arrowClick?: boolean;
// };
// export const HomeContainer = styled.div`
//   width: 100%;
//   position: relative;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   gap: 48px;
//   height: 200vh;
// `;
// export const HomeInner = styled.div`
//   width: 1440px;

//   display: flex;
//   height: 2000px;
//   gap: 96px;
// `;
// export const HomeContentSection = styled.div`
//   width: 70%;
// `;
// export const HomeProfileSection = styled.div`
//   width: 30%;
//   padding-top: 36px;
//   display: flex;
//   flex-direction: column;
//   gap: 48px;
// `;
// export const HomeContentTitle = styled.div`
//   width: 100%;
//   display: flex;
//   gap: 6px;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.AlmondPeach};
//   align-items: center;
//   padding-bottom: 12px;
//   justify-content: space-between;
//   align-items: center;
//   div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 6px;
//   }
//   form {
//     position: relative;
//     svg {
//       position: absolute;
//       top: 50%;
//       right: 6px;
//       transform: translate(0%, -50%);

//       cursor: pointer;
//       path {
//         fill: ${({ theme }) => theme.colors.AlmondPeach};
//       }
//     }
//   }
//   input[type="text"]:focus + svg path {
//     fill: ${({ theme }) => theme.colors.PeachFuzz};
//   }
//   input[type="text"] {
//     border: 1px solid ${({ theme }) => theme.colors.AlmondPeach};
//     padding: 6px 12px;
//     position: relative;
//     &:focus {
//       outline: 1px solid ${({ theme }) => theme.colors.PeachFuzz};
//       border-radius: none;
//       outline-offset: 0px;
//       border: 1px solid ${({ theme }) => theme.colors.PeachFuzz};
//     }
//   }
//   span {
//     color: ${({ theme }) => theme.colors.PeachFuzz};
//     font-weight: 300;
//     font-size: 14px;
//   }
// `;
// export const HomeProfileTitle = styled.div`
//   width: 100%;
//   border: 1px solid ${({ theme }) => theme.colors.AlmondPeach};
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding: 36px 0px;
//   gap: 12px;
//   position: relative;
// `;
// export const HomeProfile = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 24px;

//   i {
//     right: 12px;
//     top: 12px;
//     position: absolute;
//     background: url(${setting.src});
//     background-position: center;
//     background-size: contain;
//     width: 18px;
//     height: 18px;
//     cursor: pointer;
//   }
//   div {
//     width: 200px;
//     height: 200px;
//     background: ${({ theme }) => theme.colors.NauticalBlue};
//     border-radius: 50%;
//   }
//   p {
//     font-size: 14px;
//     color: ${({ theme }) => theme.colors.AlmondPeach};
//   }
// `;
// export const ProfileBtnSection = styled.div`
//   width: 100%;
//   display: flex;

//   justify-content: center;
//   padding: 6px 0px;
//   align-items: center;

//   gap: 12px;
//   div {
//     width: 100px;
//     border-radius: 8px;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 6px 6px;
//     color: ${({ theme }) => theme.colors.White};
//     font-size: 14px;
//     transition: all 0.3s;
//   }
//   :first-child {
//     background: ${({ theme }) => theme.colors.Baltic};

//     &:hover {
//       background: ${({ theme }) => theme.colors.NauticalBlue};
//       color: ${({ theme }) => theme.colors.White};
//     }
//   }
//   :last-child {
//     background: ${({ theme }) => theme.colors.LittleBoyBlue};
//     &:hover {
//       background: ${({ theme }) => theme.colors.NauticalBlue};
//       color: ${({ theme }) => theme.colors.White};
//     }
//   }
// `;
// export const TypeSection = styled.div`
//   border-bottom: 1px solid ${({ theme }) => theme.colors.AlmondPeach};
//   width: 100%;

//   div {
//     padding-bottom: 6px;
//     display: flex;
//     justify-content: space-between;
//     span {
//       color: ${({ theme }) => theme.colors.PeachFuzz};
//       margin-left: 6px;
//     }
//   }
// `;
// export const ArrowPeach = styled.p<clickProps>`
//   background: url(${arrow_peach.src});
//   background-position: center;
//   background-size: contain;
//   width: 18px;
//   height: 18px;
//   cursor: pointer;
//   transform: ${({ $arrowClick }) => ($arrowClick ? "rotate(180deg)" : "")};
// `;
// export const TypeSectionUl = styled.ul<clickProps>`
//   width: 100%;

//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   overflow: hidden;
//   transition: height 0.3s;
//   ${({ $arrowClick }) =>
//     $arrowClick
//       ? css`
//           height: auto;
//           padding: 12px 24px;
//         `
//       : css`
//           height: 0;
//           padding: 0;
//         `}
//   li {
//     list-style: disc;
//     color: ${({ theme }) => theme.colors.AlmondPeach};
//     font-size: 14px;
//     transition: all 0.3s;
//     cursor: pointer;

//     &:hover {
//       color: #000;
//     }
//   }
// `;
// export const TypeSectionTagUl = styled.ul<clickProps>`
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   flex-direction: column;
//   gap: 12px;
//   overflow: hidden;
//   transition: height 0.3s;
//   ${({ $arrowClick }) =>
//     $arrowClick
//       ? css`
//           height: auto;
//           padding: 12px 24px;
//         `
//       : css`
//           height: 0;
//           padding: 0;
//         `}
//   li {
//     list-style: none;
//     color: ${({ theme }) => theme.colors.AlmondPeach};
//     font-size: 14px;
//     transition: all 0.3s;
//     cursor: pointer;

//     &:hover {
//       color: #000;
//     }
//   }
//   li::before {
//     content: "#";
//     margin-right: 5px;
//   }
// `;
