const mediaSize = {
  xs: "screen and (max-width: 428px)",
  sm: "screen and (max-width: 744px)",
  md: "screen and (max-width: 1024px)",
  lg: "screen and (max-width: 1280px)",
  xl: "screen and (max-width: 1440px)",
  "2xl": "screen and (max-width: 1536px)",
};

const fontSize = {
  p12: "12px",
  p15: "15px",
  p16: "16px",
  p14: "14px",
  p19: "19px",
  p20: "20px",
  p22: "22px",
  p11: "11px",
  p13: "13px",
  p25: "25px",
  p45: "45px",
  p28: "28px",
  p18: "18px",
  p9: "9px",
  p24: "24px",
  p8: "8px",
  p32: "32px",
  p27: "27px",
  p30: "30px",
  p17: "17px",
  p10: "10px",
  p76: "76px",
};

/** 그 외의 크기 */
const size = {
  xs: "0.2em",
  sm: "0.4em",
  md: "0.6em",
  lg: "1em",
  xl: "1.4em",
  "2xl": "1.6em",
};

const colors = {
  White: "#FFFFFF",
  PinkYarrow: "#CE3375",
  AuroraPink: "#E881A6",
  PeachFuzz: "#FFBE98",
  BlazingOrange: "#FFA74F",
  Bermuda: "#60C8B3",
  Baltic: "#279D9F",
  NauticalBlue: "#1B5081",
  LittleBoyBlue: "#6EA1D4",
  JadeGreen: "#759465",
  GreenBanana: "#BABC72",
  HoneyYellow: "#CA9456",
  AlmondPeach: "#D8C8BD",
  // input_BOXbg: "#2C273F",
  // login_BOXline: "#4F4B67",
  // mocup_bg: "#ECECEC",
  // mocup_line: "#D1D1D1",
  // mocup_text: "#929292",
  // transparent: "transparent",
  // popup_B01: "#4F4B67",
  // inputFill: "#2c273f",
  // nav_BG: "#3d3755",
  // line: "#BCBCCC",
  // footer_line: "#D9D9D9",
  // mainLine: "#403C5C",
  // datatitle: "#706d82",
  // detail_BG: "#46405F",
};

const theme = {
  colors,
  mediaSize,
  fontSize,
  size,
};

export default theme;

export type Theme = typeof theme;
