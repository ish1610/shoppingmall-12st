import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

const initialPromotioState = { isShowPromotion: true };

const promotionSlice = createSlice({
  name: "scroll",
  initialState: initialPromotioState,
  reducers: {
    showPromotion(state) {
      state.isShowPromotion = true;
    },
    hidePromotion(state) {
      state.isShowPromotion = false;
    },
  },
});

export const { showPromotion, hidePromotion } = promotionSlice.actions;

export const selectIsShowPromotion = (state: RootState) =>
  state.promotion.isShowPromotion;

export default promotionSlice.reducer;
