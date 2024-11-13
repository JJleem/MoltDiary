import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DayState {
  date: string;
}

// 초기 상태: 기본값은 빈 문자열
const initialState: DayState = {
  date: "",
};

const daySlice = createSlice({
  name: "dateSlice",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

// 액션 및 리듀서 내보내기
export const { setDate } = daySlice.actions;
export default daySlice.reducer;
